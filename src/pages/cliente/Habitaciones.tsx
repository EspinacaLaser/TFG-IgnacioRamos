import React, { useEffect, useState } from "react";
import HabitacionCard from "../../components/habitaciones/HabitacionCard";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Habitaciones: React.FC = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    fetch("http://localhost/hotel-api/habitaciones.php")
      .then(res => res.json())
      .then(data => setHabitaciones(data));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>Habitaciones disponibles</Typography>
      {habitaciones.map((h: any) => (
        <HabitacionCard
          key={h.id}
          numero={h.numero}
          estado={h.estado}
          capacidad={h.capacidad}
          descripcion={h.descripcion}
          imagenes={h.imagenes || []}
          onDetalles={() => { /* TODO: implement details handler */ }}
          onReservar={() => { /* TODO: implement reserve handler */ }}
        />
      ))}
    </Container>
  );
};

export default Habitaciones;