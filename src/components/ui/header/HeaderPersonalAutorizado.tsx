/**
 * Header para personal autorizado (recepcionista y admin).
 * Muestra el logo reutilizable, el nombre del usuario y el botón de cerrar sesión.
 * Diseño minimalista, responsivo y coherente con la interfaz de gestión.
 */
import React from "react";
import { Box } from "@mui/material";
import LogoutButton from "./LogoutButton";
import WelcomeUser from "./WelcomeUser";

const HeaderPersonalAutorizado: React.FC = () => (
  <Box
    component="header"
    sx={{
      width: "100%",
      background: "#2d3e50",
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
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <WelcomeUser />
    </Box>
    <LogoutButton />
  </Box>
);

export default HeaderPersonalAutorizado;