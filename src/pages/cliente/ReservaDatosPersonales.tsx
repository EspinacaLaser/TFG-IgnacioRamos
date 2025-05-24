import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReservaLayout from "../../layouts/ReservaLayout";
import ReservaResumenHabitacion from "../../components/reservas/ReservaResumenHabitacion";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const PRECIO_BUFET = 8;
const PRECIO_PARKING = 12;

const ReservaDatosPersonales: React.FC = () => {
  const { habitacionId } = useParams();
  const [habitacion, setHabitacion] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [extras, setExtras] = useState({ bufet: false, parking: false });

  useEffect(() => {
    // Cambia la URL según tu backend real
    fetch(`http://localhost/hotel-api/habitacion.php?id=${habitacionId}`)
      .then(res => res.json())
      .then(data => {
        setHabitacion(data);
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

  // Si no hay datos, muestra mensaje de error
  if (!habitacion) {
    return <Box sx={{ mt: 8, textAlign: "center" }}>Habitación no encontrada</Box>;
  }

  return (
    <ReservaLayout
      izquierda={
        <ReservaResumenHabitacion
          imagen={habitacion.imagen_destacada}
          precioBase={habitacion.precio_base}
          extras={extras}
          onExtrasChange={setExtras}
        />
      }
      derecha={
        // Aquí irá la columna derecha (formulario, etc.)
        <Box />
      }
    />
  );
};

export default ReservaDatosPersonales;