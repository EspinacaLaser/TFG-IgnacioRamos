import React, { useState } from "react";
import { Button, Typography, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";

/**
 * Props para el botón de registro de hora.
 */
interface Props {
  tipo: "entrada" | "salida";
  recepcionistaId: number;
  onFeedback: (msg: string, tipo: "success" | "error") => void;
}

/**
 * Botón que permite registrar la hora de entrada o salida.
 * Muestra la última hora registrada tras fichar.
 */
const BotonRegistroHora: React.FC<Props> = ({ tipo, recepcionistaId, onFeedback }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [ultimaHora, setUltimaHora] = useState<string | null>(null);

  // Formatea la fecha/hora en formato dd/mm/yyyy - hh:mm
  const formatearFecha = (fecha: Date) => {
    const d = fecha;
    const dia = String(d.getDate()).padStart(2, "0");
    const mes = String(d.getMonth() + 1).padStart(2, "0");
    const anio = d.getFullYear();
    const hora = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    return `${dia}/${mes}/${anio} - ${hora}:${min}`;
  };

  // Llama al endpoint correspondiente
  const handleRegistro = async () => {
    setLoading(true);
    try {
      const endpoint =
        tipo === "entrada"
          ? "http://localhost/hotel-api/registro_entrada.php"
          : "http://localhost/hotel-api/registro_salida.php";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recepcionista_id: recepcionistaId }),
      });
      const data = await res.json();
      if (data.success) {
        const ahora = new Date();
        setUltimaHora(formatearFecha(ahora));
        onFeedback(data.mensaje, "success");
      } else {
        onFeedback(data.error || "Error al registrar", "error");
      }
    } catch {
      onFeedback("Error de conexión", "error");
    }
    setLoading(false);
  };

  return (
    <div>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontFamily: theme.typography.h6.fontFamily,
          color: tipo === "entrada" ? theme.palette.success.main : theme.palette.warning.main,
        }}
      >
        {tipo === "entrada" ? "Registrar entrada" : "Registrar salida"}
      </Typography>
      <Button
        variant="contained"
        color={tipo === "entrada" ? "success" : "warning"}
        onClick={handleRegistro}
        disabled={loading}
        sx={{
          fontFamily: theme.typography.button.fontFamily,
          fontWeight: 600,
          fontSize: "1rem",
          px: 4,
          py: 1.5,
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Fichar"}
      </Button>
      {ultimaHora && (
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            color: theme.palette.text.secondary,
            fontFamily: theme.typography.body2.fontFamily,
          }}
        >
          Última {tipo}: {ultimaHora}
        </Typography>
      )}
    </div>
  );
};

export default BotonRegistroHora;