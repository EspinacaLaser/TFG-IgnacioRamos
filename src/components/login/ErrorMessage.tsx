import React from "react";

/**
 * Componente para mostrar mensajes de error.
 * Recibe el mensaje como prop y lo muestra con estilos destacados.
 */
interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="text-red-600 bg-red-100 border border-red-300 rounded px-3 py-2 my-2 text-sm">
      {message}
    </div>
  );
};

export default ErrorMessage;