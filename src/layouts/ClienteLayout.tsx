import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

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
      <Box sx={{ bgcolor: "blue.50", minHeight: "100vh", py: 4 }}>
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ClienteLayout;