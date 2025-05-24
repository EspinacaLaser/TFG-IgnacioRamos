/**
 * Galería de imágenes de la habitación.
 * Muestra las imágenes recibidas en un scroll horizontal.
 * Usa el array de imágenes específico de la habitación.
 */
import React from "react";
import Box from "@mui/material/Box";

interface GaleriaImagenesHabitacionProps {
  imagenes: string[];
  numero: string;
}

const GaleriaImagenesHabitacion: React.FC<GaleriaImagenesHabitacionProps> = ({ imagenes, numero }) => (
  <Box sx={{ display: "flex", gap: 2, overflowX: "auto", mb: 2 }}>
    {imagenes.map((img, idx) => (
      <img
        key={idx}
        src={`/img/${img}`}
        alt={`Habitación ${numero} imagen ${idx + 1}`}
        style={{ width: 180, height: 120, objectFit: "cover", borderRadius: 8 }}
      />
    ))}
  </Box>
);

export default GaleriaImagenesHabitacion;