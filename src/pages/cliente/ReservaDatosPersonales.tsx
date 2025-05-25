import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReservaLayout from "../../layouts/ReservaLayout";
import ReservaResumenHabitacion from "../../components/reservas/ReservaResumenHabitacion";
import ReservaFormularioDatos from "../../components/reservas/ReservaFormularioDatos";
import ReservaCondicionalesInfo from "../../components/reservas/ReservaCondicionalesInfo";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const PRECIO_BUFET = 8;
const PRECIO_PARKING = 12;

/**
 * Página principal de la reserva:
 * - Obtiene los datos de la habitación seleccionada.
 * - Gestiona el estado de fechas, datos personales y extras.
 * - Calcula noches y total.
 * - Muestra el layout con resumen a la izquierda y formulario a la derecha.
 */
const ReservaDatosPersonales: React.FC = () => {
  const { habitacionId } = useParams();
  const [habitacion, setHabitacion] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [extras, setExtras] = useState({ bufet: false, parking: false });

  // Estado para fechas y datos personales
  const [fechas, setFechas] = useState({ entrada: "", salida: "" });
  const [datos, setDatos] = useState({ nombre: "", email: "", telefono: "", prefijo: "" });

  // Calcula el número de noches
  const calcularNoches = () => {
    if (!fechas.entrada || !fechas.salida) return 0;
    const entrada = new Date(fechas.entrada);
    const salida = new Date(fechas.salida);
    const diff = (salida.getTime() - entrada.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };
  const noches = calcularNoches();

  // Calcula el total
  const base = (Number(habitacion?.precio_base) || 0) * (noches || 0);
  const iva = +(base * 0.10).toFixed(2);
  const extrasTotal =
    (extras.bufet ? PRECIO_BUFET : 0) * (noches || 0) +
    (extras.parking ? PRECIO_PARKING : 0) * (noches || 0);
  const total = +(base + iva + extrasTotal).toFixed(2);

  // Al montar, hace scroll al top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Carga los datos de la habitación seleccionada
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
          noches={noches}
          extras={extras}
          onExtrasChange={setExtras}
        />
      }
      derecha={
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <ReservaFormularioDatos
            fechas={fechas}
            onFechasChange={setFechas}
            datos={datos}
            onDatosChange={setDatos}
            noches={noches}
            total={total}
          />
          <ReservaCondicionalesInfo />
        </Box>
      }
    />
  );
};

export default ReservaDatosPersonales;