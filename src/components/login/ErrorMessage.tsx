import React from "react";
import Alert from "@mui/material/Alert";

/**
 * Componente para mostrar mensajes de error en formularios.
 * Utiliza el componente Alert de MUI para destacar el mensaje.
 */
interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return (
    <Alert severity="error" sx={{ my: 2 }}>
      {message}
    </Alert>
  );
};

export default ErrorMessage;