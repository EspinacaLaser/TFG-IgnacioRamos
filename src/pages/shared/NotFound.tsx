/**
 * Página 404 para rutas no encontradas.
 * Muestra un mensaje amigable y un enlace para volver al inicio.
 * Usa la fuente Montserrat para el título y Open Sans para el texto.
 */
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <Box
    sx={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      mt: 8,
    }}
  >
    <Typography
      variant="h2"
      fontWeight="bold"
      sx={{ fontFamily: "'Montserrat', Arial, sans-serif", mb: 2 }}
    >
      404 - Página no encontrada
    </Typography>
    <Typography variant="body1" sx={{ mb: 4 }}>
      Lo sentimos, la página que buscas no existe o ha sido movida.
    </Typography>
    <Button
      component={Link}
      to="/cliente/home"
      variant="contained"
      color="primary"
      sx={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
    >
      Volver al inicio
    </Button>
  </Box>
);

export default NotFound;