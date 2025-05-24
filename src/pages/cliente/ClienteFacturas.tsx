/**
 * Página de facturas del cliente.
 * Aquí se mostrarán las facturas disponibles.
 * Usa la fuente Montserrat para el título.
 */
import React from "react";
import Typography from "@mui/material/Typography";

const ClienteFacturas: React.FC = () => (
  <Typography
    variant="h4"
    fontWeight="bold"
    sx={{ mt: 4, fontFamily: "'Montserrat', Arial, sans-serif" }}
  >
    Cliente - Facturas
  </Typography>
);

export default ClienteFacturas;