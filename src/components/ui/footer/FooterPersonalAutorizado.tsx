/**
 * Footer para personal autorizado (recepcionista y admin).
 * Muestra solo el copyright.
 * Diseño minimalista y responsivo.
 */
import React from "react";
import { Box } from "@mui/material";
import Copyright from "./Copyright";

const FooterPersonalAutorizado: React.FC = () => (
  <Box
    component="footer"
    sx={{
      width: "100%",
      background: "#2d3e50", // Color especial para paneles internos
      color: "#fff",
      textAlign: "center",
      py: 2,
      mt: 4,
      fontSize: "0.95rem",
      letterSpacing: 1,
    }}
  >
    <Copyright />
  </Box>
);

export default FooterPersonalAutorizado;