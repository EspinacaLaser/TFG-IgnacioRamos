import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderPersonalAutorizado from "../components/ui/header/HeaderPersonalAutorizado";
import FooterPersonalAutorizado from "../components/ui/footer/FooterPersonalAutorizado";

/**
 * Layout principal para la interfaz de administrador.
 * Protege las rutas privadas comprobando que el usuario esté autenticado y tenga rol de admin.
 * Muestra el header y footer del personal autorizado.
 */
const AdminLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Recupera el usuario autenticado desde localStorage
    const user = JSON.parse(localStorage.getItem("user") || "null");
    // Si no hay usuario o el rol no es admin, redirige al login
    if (!user || user.rol !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <HeaderPersonalAutorizado />
      <main className="bg-yellow-50 min-h-screen p-4">
        <Outlet />
      </main>
      <FooterPersonalAutorizado />
    </>
  );
};

export default AdminLayout;