/**
 * ClienteLayout: layout principal para la interfaz de cliente.
 * Incluye el header, el footer y un contenedor principal para las páginas.
 * Aplica el fondo y el padding global.
 */
import React from "react";
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const ClienteLayout: React.FC = () => (
  <>
    <Header />
    <Box
      component="main"
      sx={{
        bgcolor: "background.default",
        minHeight: "80vh",
        px: { xs: 1, md: 4 },
        py: { xs: 2, md: 4 },
        fontFamily: "'Open Sans', Arial, sans-serif",
        mt: { xs: 1, md: 2 }, // Añade separación arriba
      }}
    >
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default ClienteLayout;