/**
 * Página de reservas del cliente.
 * Aquí se mostrarán las reservas activas y el historial.
 * Usa la fuente Montserrat para el título.
 */
import React from "react";
import Typography from "@mui/material/Typography";

const ClienteReservas: React.FC = () => (
  <Typography
    variant="h4"
    fontWeight="bold"
    sx={{ mt: 4, fontFamily: "'Montserrat', Arial, sans-serif" }}
  >
    Cliente - Mis Reservas
  </Typography>
);

export default ClienteReservas;