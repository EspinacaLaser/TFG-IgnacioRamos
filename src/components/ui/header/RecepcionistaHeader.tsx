import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Header específico para la interfaz de recepcionista.
 * Muestra el nombre del usuario autenticado y un botón para cerrar sesión.
 */
const RecepcionistaHeader: React.FC = () => {
  const navigate = useNavigate();

  // Recupera el usuario autenticado desde localStorage
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    // Limpia el usuario autenticado y redirige al login
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-green-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">Panel Recepción</h1>
        {/* Muestra el nombre del usuario si está autenticado */}
        {user && user.nombre_completo && (
          <span className="ml-2 text-base font-medium">
            Hola, {user.nombre_completo}
          </span>
        )}
      </div>
      <button
        onClick={handleLogout}
        className="bg-white text-green-700 px-4 py-2 rounded font-semibold hover:bg-green-100 transition"
      >
        Cerrar sesión
      </button>
    </header>
  );
};

export default RecepcionistaHeader;