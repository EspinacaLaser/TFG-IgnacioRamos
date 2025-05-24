/**
 * HabitacionCard: tarjeta que muestra la información principal de una habitación.
 * Incluye imagen, número, estado, capacidad, descripción y botones de acción.
 * Usa la fuente Montserrat para títulos y botones, y Open Sans para descripciones (por theme).
 * Los botones se deshabilitan si la habitación está en mantenimiento u ocupada.
 */
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BotonDetalles from "./BotonDetalles";
import BotonReservar from "./BotonReservar";

interface HabitacionCardProps {
  numero: string;
  estado: string;
  capacidad: number;
  descripcion: string;
  imagenes: string[];
  onDetalles: () => void;
  onReservar: () => void;
}

const HabitacionCard: React.FC<HabitacionCardProps> = ({
  numero, estado, capacidad, descripcion, imagenes, onDetalles, onReservar
}) => {
  // Los botones se deshabilitan si la habitación está ocupada o en mantenimiento
  const botonesDeshabilitados = estado === "mantenimiento" || estado === "ocupada";

  return (
    <Card
      sx={{
        width: "100%",
        mb: 3,
        p: 2,
        display: "flex",
        flexDirection: "column",
        boxShadow: 4,
        fontFamily: "'Open Sans', Arial, sans-serif", // Fuente secundaria para el contenido
      }}
    >
      {/* Imagen principal de la habitación */}
      {imagenes && imagenes.length > 0 && (
        <img
          src={`http://localhost${imagenes[0]}`}
          alt={`Habitación ${numero}`}
          style={{ width: "100%", maxHeight: 220, objectFit: "cover", borderRadius: 8 }}
        />
      )}
      <CardContent>
        {/* Título con fuente Montserrat */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
        >
          Habitación {numero}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          Estado: {estado}
        </Typography>
        <Typography>
          Capacidad: {capacidad} personas
        </Typography>
        <Typography sx={{ mt: 1 }}>
          {descripcion}
        </Typography>
        <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
          <BotonDetalles onClick={onDetalles} disabled={botonesDeshabilitados} />
          <BotonReservar onClick={onReservar} disabled={botonesDeshabilitados} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HabitacionCard;