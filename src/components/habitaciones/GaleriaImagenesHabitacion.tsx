/**
 * GaleriaImagenesHabitacion
 * 
 * Slider/carrousel de imágenes para una habitación.
 * Muestra una imagen a la vez, cambia automáticamente cada 3 segundos,
 * permite avanzar/retroceder con flechas y añade una animación de desvanecimiento al cambiar de imagen.
 */
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface GaleriaImagenesHabitacionProps {
  imagenes: string[];
  numero: string;
}

const GaleriaImagenesHabitacion: React.FC<GaleriaImagenesHabitacionProps> = ({ imagenes, numero }) => {
  const [indice, setIndice] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  // Avanza automáticamente cada 3 segundos
  useEffect(() => {
    if (imagenes.length <= 1) return;
    timeoutRef.current = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setIndice((prev) => (prev + 1) % imagenes.length);
        setFade(true);
      }, 250); // Duración de la animación de salida
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [indice, imagenes.length]);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndice((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
      setFade(true);
    }, 250);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
      setFade(true);
    }, 250);
  };

  if (!imagenes.length) return null;

  return (
    <Box sx={{ position: "relative", width: 320, height: 200, mx: "auto", mb: 2 }}>
      <img
        src={`http://localhost${imagenes[indice]}`}
        alt={`Habitación ${numero} imagen ${indice + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 8,
          opacity: fade ? 1 : 0,
          transition: "opacity 0.25s ease"
        }}
      />
      {/* Flecha izquierda */}
      {imagenes.length > 1 && (
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 8,
            transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.7)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      )}
      {/* Flecha derecha */}
      {imagenes.length > 1 && (
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 8,
            transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.7)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}
      {/* Indicadores de posición */}
      <Box sx={{ position: "absolute", bottom: 8, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 1 }}>
        {imagenes.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: i === indice ? "primary.main" : "grey.400",
              transition: "background 0.2s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GaleriaImagenesHabitacion;