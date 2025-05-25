import React, { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

interface ReservaFechasSelectorProps {
  fechas: { entrada: string; salida: string };
  onFechasChange: (fechas: { entrada: string; salida: string }) => void;
}

const ReservaFechasSelector: React.FC<ReservaFechasSelectorProps> = ({ fechas, onFechasChange }) => {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().split("T")[0];
  }, []);

  const [error, setError] = useState<string | null>(null);

  const handleEntradaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const entrada = e.target.value;
    let salida = fechas.salida;

    // Si la salida es anterior a la nueva entrada, la reseteamos
    if (salida && salida < entrada) {
      salida = "";
    }
    onFechasChange({ entrada, salida });
    setError(null);
  };

  const handleSalidaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const salida = e.target.value;
    const entrada = fechas.entrada;

    if (entrada && salida) {
      const entradaDate = new Date(entrada);
      const salidaDate = new Date(salida);
      const diff = (salidaDate.getTime() - entradaDate.getTime()) / (1000 * 60 * 60 * 24);

      if (diff < 1) {
        setError("La estancia mínima es de 1 día.");
      } else if (diff > 7) {
        setError("La estancia máxima es de 7 días.");
      } else {
        setError(null);
      }
    }
    onFechasChange({ ...fechas, salida });
  };
  // Calcula el número de noches
const calcularNoches = () => {
  if (!fechas.entrada || !fechas.salida) return 0;
  const entrada = new Date(fechas.entrada);
  const salida = new Date(fechas.salida);
  const diff = (salida.getTime() - entrada.getTime()) / (1000 * 60 * 60 * 24);
  return diff > 0 ? diff : 0;
};

const noches = calcularNoches();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          label="Fecha de entrada"
          type="date"
          value={fechas.entrada}
          onChange={handleEntradaChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
          inputProps={{
            min: today,
            max: fechas.salida || undefined,
          }}
        />
        <TextField
          label="Fecha de salida"
          type="date"
          value={fechas.salida}
          onChange={handleSalidaChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
          inputProps={{
            min: fechas.entrada || today,
            max: fechas.entrada
              ? new Date(new Date(fechas.entrada).getTime() + 7 * 24 * 60 * 60 * 1000)
                  .toISOString()
                  .split("T")[0]
              : undefined,
          }}
        />
      </Box>
      {error && <Alert severity="warning">{error}</Alert>}
    </Box>
  );
};

export default ReservaFechasSelector;