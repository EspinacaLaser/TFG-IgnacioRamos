import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import RecepcionistaHeader from "../components/ui/header/RecepcionistaHeader";
import Footer from "../components/ui/footer/Footer";

/**
 * Layout principal para la interfaz de recepcionista.
 * Protege las rutas privadas comprobando que el usuario esté autenticado y tenga rol de recepcionista.
 */
const RecepcionistaLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Recupera el usuario autenticado desde localStorage
    const user = JSON.parse(localStorage.getItem("user") || "null");
    // Si no hay usuario o el rol no es recepcionista, redirige al login
    if (!user || user.rol !== "recepcionista") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <RecepcionistaHeader />
      <main className="bg-green-50 min-h-screen p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RecepcionistaLayout;