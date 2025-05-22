import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";

/**
 * Layout principal para la interfaz de cliente.
 * Protege las rutas privadas comprobando que el usuario esté autenticado y tenga rol de cliente.
 */
const ClienteLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Recupera el usuario autenticado desde localStorage
    const user = JSON.parse(localStorage.getItem("user") || "null");
    // Si no hay usuario o el rol no es cliente, redirige al login
    if (!user || user.rol !== "cliente") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <main className="bg-blue-50 min-h-screen p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ClienteLayout;