import React from "react";
import { useNavigate } from "react-router-dom";

const RecepcionistaHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpia el usuario autenticado (ajusta según tu lógica)
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-green-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">Panel Recepción</h1>
        {/* Aquí podrías mostrar el nombre del usuario si lo tienes */}
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