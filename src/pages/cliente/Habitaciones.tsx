import React, { useEffect, useState } from "react";
import HabitacionCard from "../../components/habitaciones/HabitacionCard";
import HabitacionDetalleModal from "../../components/habitaciones/HabitacionDetalleModal";
import Container from "@mui/material/Container";
import Hero from "../../components/habitaciones/Hero";

const Habitaciones: React.FC = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost/hotel-api/habitaciones.php")
      .then(res => res.json())
      .then(data => setHabitaciones(data));
  }, []);

  const handleDetalles = (habitacion: any) => {
    setHabitacionSeleccionada(habitacion);
    setModalOpen(true);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Hero
        title="Habitaciones disponibles"
        subtitle="Elige la habitación perfecta para tu estancia y disfruta de todas las comodidades."
      />
      {habitaciones.map((h: any) => (
        <HabitacionCard
          key={h.id}
          numero={h.numero}
          estado={h.estado}
          capacidad={h.capacidad}
          descripcion={h.descripcion}
          imagenes={h.imagenes || []}
          onDetalles={() => handleDetalles(h)}
          onReservar={() => { /* TODO: implement reserve handler */ }}
        />
      ))}
      {/* Modal de detalle */}
      {habitacionSeleccionada && (
        <HabitacionDetalleModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          habitacion={habitacionSeleccionada}
        />
      )}
    </Container>
  );
};

export default Habitaciones;