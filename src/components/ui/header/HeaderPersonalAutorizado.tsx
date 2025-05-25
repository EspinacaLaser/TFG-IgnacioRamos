/**
 * Header para personal autorizado (recepcionista y admin).
 * Muestra el logo reutilizable y el botón de cerrar sesión.
 * Diseño minimalista, responsivo y coherente con la interfaz de gestión.
 */
import React from "react";
import { Box } from "@mui/material";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton"; // Debes crear este componente reutilizando la lógica de logout

const HeaderPersonalAutorizado: React.FC = () => (
  <Box
    component="header"
    sx={{
      width: "100%",
      background: "#2d3e50", // Color especial para paneles internos
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: { xs: 2, md: 4 },
      py: { xs: 1, md: 2 },
      boxShadow: 2,
      minHeight: { xs: 60, md: 80 },
    }}
  >
    <Logo />
    <LogoutButton />
  </Box>
);

export default HeaderPersonalAutorizado;