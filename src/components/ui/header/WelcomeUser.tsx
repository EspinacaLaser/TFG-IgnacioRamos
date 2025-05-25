/**
 * Muestra el nombre del usuario autenticado.
 * Detecta si es cliente, recepcionista o admin y muestra el campo correcto.
 * Reutilizable en cualquier header.
 */
import React from "react";

const WelcomeUser: React.FC = () => {
  // Intenta obtener el usuario desde localStorage (ajusta si usas contexto)
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) return null;

  // Detecta el campo de nombre según el tipo de usuario
  const nombre =
    user.nombre_completo || user.nombre || user.usuario || "Usuario";

  return (
    <span
    >
      Usuario: {nombre}
    </span>
  );
};

export default WelcomeUser;