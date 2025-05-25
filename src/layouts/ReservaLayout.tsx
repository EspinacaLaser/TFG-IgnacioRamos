import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

/**
 * Props del layout de la reserva.
 * - izquierda: contenido de la columna izquierda (resumen habitación).
 * - derecha: contenido de la columna derecha (formulario y condiciones).
 */
interface ReservaLayoutProps {
  izquierda: React.ReactNode;
  derecha: React.ReactNode;
}

/**
 * Layout para la página de reserva.
 * - Usa Stack de MUI para organizar dos columnas.
 * - Responsive: columna en móvil, fila en escritorio.
 * - Espaciado y alineación configurados para buena presentación.
 */
const ReservaLayout: React.FC<ReservaLayoutProps> = ({ izquierda, derecha }) => (
  <Box sx={{ py: 6, width: "100%", display: "flex", justifyContent: "center" }}>
    <Stack
      direction={{ xs: "column", md: "row" }} // Responsive: columna en móvil, fila en escritorio
      spacing={4} // Espacio entre columnas
      sx={{ width: "100%", maxWidth: 1200 }}
      alignItems="flex-start"
      justifyContent="center"
    >
      <Box sx={{ flex: 1, minWidth: 0 }}>{izquierda}</Box>
      <Box sx={{ flex: 2, minWidth: 0 }}>{derecha}</Box>
    </Stack>
  </Box>
);

export default ReservaLayout;