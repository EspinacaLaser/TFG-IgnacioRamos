import React from "react";

/**
 * Selector de rol para el login.
 * Permite elegir entre Cliente y Personal autorizado (Recepcionista/Admin).
 */
interface RoleSelectorProps {
  tipo: "cliente" | "personal";
  setTipo: (tipo: "cliente" | "personal") => void;
  subrol: "recepcionista" | "admin";
  setSubrol: (subrol: "recepcionista" | "admin") => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({
  tipo,
  setTipo,
  subrol,
  setSubrol,
}) => (
  <div className="mb-4">
    <div className="flex gap-4 mb-2">
      <button
        type="button"
        className={`px-4 py-2 rounded ${tipo === "cliente" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setTipo("cliente")}
      >
        Cliente
      </button>
      <button
        type="button"
        className={`px-4 py-2 rounded ${tipo === "personal" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setTipo("personal")}
      >
        Personal autorizado
      </button>
    </div>
    {tipo === "personal" && (
      <div className="flex gap-4">
        <button
          type="button"
          className={`px-4 py-2 rounded ${subrol === "recepcionista" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSubrol("recepcionista")}
        >
          Recepcionista
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded ${subrol === "admin" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSubrol("admin")}
        >
          Administrador
        </button>
      </div>
    )}
  </div>
);

export default RoleSelector;