import React from "react";
import { Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";

/**
 * Props para el mensaje de registro.
 */
interface Props {
  tipo: "success" | "error";
  mensaje: string;
}

/**
 * Muestra un mensaje de feedback tras registrar entrada o salida.
 */
const MensajeRegistro: React.FC<Props> = ({ tipo, mensaje }) => {
  const theme = useTheme();
  return (
    <Alert
      severity={tipo}
      sx={{
        fontFamily: theme.typography.body1.fontFamily,
        fontSize: "1rem",
        borderRadius: 2,
      }}
    >
      {mensaje}
    </Alert>
  );
};

export default MensajeRegistro;