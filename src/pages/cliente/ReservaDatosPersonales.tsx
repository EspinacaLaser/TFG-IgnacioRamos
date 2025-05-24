import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReservaLayout from "../../layouts/ReservaLayout";
import ReservaResumenHabitacion from "../../components/reservas/ReservaResumenHabitacion";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ReservaDatosPersonales: React.FC = () => {
  const { habitacionId } = useParams();
  const [habitacion, setHabitacion] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [extras, setExtras] = useState({ bufet: false, parking: false });

  // Scroll al top al montar el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  console.log("habitacionId param:", habitacionId);

  useEffect(() => {
    if (!habitacionId) {
      console.warn("No se recibió habitacionId en la URL");
      setLoading(false);
      return;
    }
    fetch(`http://localhost/hotel-api/habitacion.php?id=${habitacionId}`)
      .then(res => res.json())
      .then(data => {
        setHabitacion(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al obtener la habitación:", err);
        setLoading(false);
      });
  }, [habitacionId]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!habitacion) {
    return <Box sx={{ mt: 8, textAlign: "center" }}>Habitación no encontrada</Box>;
  }

  return (
    <ReservaLayout
      izquierda={
        <ReservaResumenHabitacion
          imagen={habitacion.imagenes && habitacion.imagenes.length > 0 ? `http://localhost${habitacion.imagenes[0]}` : ""}
          precioBase={habitacion.precio_base}
          extras={extras}
          onExtrasChange={setExtras}
        />
      }
      derecha={
        <Box />
      }
    />
  );
};

export default ReservaDatosPersonales;