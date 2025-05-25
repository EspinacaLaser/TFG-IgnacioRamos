import React, { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

/**
 * Props del selector de fechas de reserva.
 * - fechas: objeto con fecha de entrada y salida.
 * - onFechasChange: función para actualizar las fechas en el componente padre.
 */
interface ReservaFechasSelectorProps {
  fechas: { entrada: string; salida: string };
  onFechasChange: (fechas: { entrada: string; salida: string }) => void;
}

/**
 * Componente para seleccionar las fechas de entrada y salida de la reserva.
 * Funcionalidades:
 * - No permite seleccionar fechas anteriores a hoy.
 * - La fecha de salida no puede ser anterior a la de entrada.
 * - La estancia mínima es de 1 día y la máxima de 7 días.
 * - Muestra alertas si hay errores de rango.
 */
const ReservaFechasSelector: React.FC<ReservaFechasSelectorProps> = ({ fechas, onFechasChange }) => {
  // Calcula la fecha de hoy en formato YYYY-MM-DD
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().split("T")[0];
  }, []);

  // Estado para mostrar mensajes de error de validación
  const [error, setError] = useState<string | null>(null);

  /**
   * Maneja el cambio en la fecha de entrada.
   * Si la salida es anterior a la nueva entrada, la resetea.
   */
  const handleEntradaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const entrada = e.target.value;
    let salida = fechas.salida;

    if (salida && salida < entrada) {
      salida = "";
    }
    onFechasChange({ entrada, salida });
    setError(null);
  };

  /**
   * Maneja el cambio en la fecha de salida.
   * Valida que la estancia sea de mínimo 1 día y máximo 7 días.
   * Muestra un mensaje de error si no se cumple.
   */
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

  // NOTA: inputProps e InputLabelProps están deprecated pero siguen funcionando para campos tipo date.
  // No hay alternativa oficial aún en MUI para min/max en date.

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          label="Fecha de entrada"
          type="date"
          value={fechas.entrada}
          onChange={handleEntradaChange}
          fullWidth
          inputProps={{
            min: today,
            max: fechas.salida || undefined,
          }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Fecha de salida"
          type="date"
          value={fechas.salida}
          onChange={handleSalidaChange}
          fullWidth
          inputProps={{
            min: fechas.entrada || today,
            max: fechas.entrada
              ? new Date(new Date(fechas.entrada).getTime() + 7 * 24 * 60 * 60 * 1000)
                  .toISOString()
                  .split("T")[0]
              : undefined,
          }}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      {error && <Alert severity="warning">{error}</Alert>}
    </Box>
  );
};

export default ReservaFechasSelector;