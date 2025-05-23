import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface HabitacionCardProps {
  numero: string;
  estado: string;
  capacidad: number;
  descripcion: string;
}

const HabitacionCard: React.FC<HabitacionCardProps> = ({ numero, estado, capacidad, descripcion }) => (
  <Card sx={{ width: "100%", mb: 3, p: 2, display: "flex", flexDirection: "column", boxShadow: 4 }}>
    <CardContent>
      <Typography variant="h6" fontWeight="bold">Habitación {numero}</Typography>
      <Typography color="text.secondary" sx={{ mb: 1 }}>Estado: {estado}</Typography>
      <Typography>Capacidad: {capacidad} personas</Typography>
      <Typography sx={{ mt: 1 }}>{descripcion}</Typography>
    </CardContent>
  </Card>
);

export default HabitacionCard;