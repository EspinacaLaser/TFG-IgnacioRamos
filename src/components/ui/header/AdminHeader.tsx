import React from "react";

const AdminHeader: React.FC = () => (
  <header className="bg-yellow-600 text-white p-4 flex items-center justify-between">
    <h1 className="text-xl font-bold">Panel Administración</h1>
    {/* Aquí puedes poner el nombre del admin, botón de logout, etc. */}
  </header>
);

export default AdminHeader;