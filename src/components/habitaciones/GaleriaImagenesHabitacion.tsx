import React from "react";
import Box from "@mui/material/Box";

interface GaleriaImagenesHabitacionProps {
  imagenes: string[];
  numero: string;
}

const GaleriaImagenesHabitacion: React.FC<GaleriaImagenesHabitacionProps> = ({ imagenes, numero }) => {
  console.log("Imágenes recibidas para la galería:", imagenes);

  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "auto", mb: 2 }}>
      {imagenes.map((img, idx) => (
        <img
          key={idx}
          src={
            img.startsWith("http")
              ? img
              : `http://localhost/hotel-api/img/habitaciones/${img.endsWith(".jpg") ? img : img + ".jpg"}`
          }
          alt={`Habitación ${numero} imagen ${idx + 1}`}
          style={{ width: 180, height: 120, objectFit: "cover", borderRadius: 8 }}
        />
      ))}
    </Box>
  );
};

export default GaleriaImagenesHabitacion;