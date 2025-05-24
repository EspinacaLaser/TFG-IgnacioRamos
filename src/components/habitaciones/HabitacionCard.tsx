import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BotonDetalles from "./BotonDetalles";
import BotonReservar from "./BotonReservar";
import { useTheme } from "@mui/material/styles";

interface HabitacionCardProps {
  id: number;
  numero: string;
  estado: string;
  capacidad: number;
  descripcion: string;
  imagenes: string[];
  onDetalles: () => void;
}

const estadoColor = (estado: string, theme: any) => {
  if (estado.toLowerCase() === "disponible") return theme.palette.success.main;
  if (estado.toLowerCase() === "mantenimiento") return theme.palette.warning.main;
  if (estado.toLowerCase() === "ocupada") return theme.palette.error.main;
  return theme.palette.text.primary;
};

const HabitacionCard: React.FC<HabitacionCardProps> = ({
  id, numero, estado, capacidad, descripcion, imagenes, onDetalles
}) => {
  const botonesDeshabilitados = estado === "mantenimiento" || estado === "ocupada";
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "100%",
        mb: 3,
        p: 2,
        display: "flex",
        flexDirection: "column",
        boxShadow: 4,
        fontFamily: "'Open Sans', Arial, sans-serif",
      }}
    >
      {imagenes && imagenes.length > 0 && (
        <img
          src={`http://localhost${imagenes[0]}`}
          alt={`Habitación ${numero}`}
          style={{ width: "100%", maxHeight: 220, objectFit: "cover", borderRadius: 8 }}
        />
      )}
      <CardContent>
        <Typography
          variant="h5"
          fontWeight={800}
          sx={{ fontFamily: "'Montserrat', Arial, sans-serif", fontSize: "2rem" }}
        >
          Habitación {numero}
        </Typography>
        <Typography
          sx={{
            mb: 1,
            fontWeight: "bold",
            fontFamily: "'Open Sans', Arial, sans-serif",
            color: "text.primary",
          }}
        >
          Estado:{" "}
          <span style={{ color: estadoColor(estado, theme) }}>
            {estado.charAt(0).toUpperCase() + estado.slice(1)}
          </span>
        </Typography>
        <Typography>
          Capacidad: {capacidad} personas
        </Typography>
        <Typography sx={{ mt: 1 }}>
          {descripcion}
        </Typography>
        <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
          <BotonDetalles onClick={onDetalles} disabled={botonesDeshabilitados} />
          <BotonReservar
            habitacionId={id}
            disabled={botonesDeshabilitados}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HabitacionCard;