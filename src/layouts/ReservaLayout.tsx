import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

interface ReservaLayoutProps {
  izquierda: React.ReactNode;
  derecha: React.ReactNode;
}

/**
 * ReservaLayout
 * 
 * Este layout usa el componente Stack de MUI para organizar dos columnas:
 * - En pantallas pequeñas (xs), las columnas se apilan en vertical (direction="column").
 * - En pantallas medianas o mayores (md), las columnas se muestran en horizontal (direction="row").
 * - spacing={4} añade espacio entre las columnas.
 * - alignItems="flex-start" alinea el contenido al inicio de cada columna.
 * - justifyContent="center" centra el Stack en el contenedor.
 * - Cada columna es un Box con flex para controlar el ancho relativo.
 *   (flex: 1 para la izquierda, flex: 2 para la derecha)
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