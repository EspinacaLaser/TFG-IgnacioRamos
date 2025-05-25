import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ReservaCardCliente from "../../components/reservas/ReservaCardCliente";

/**
 * Página "Mis Reservas" para el cliente.
 * Muestra una lista de cards con las reservas del usuario.
 */
const MisReservas: React.FC = () => {
  // Estado para las reservas del cliente
  const [reservas, setReservas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulación de fetch de reservas (reemplazar por fetch real)
  useEffect(() => {
    // Aquí deberías hacer fetch al backend con el cliente_id del usuario logueado
    // Ejemplo de datos simulados:
    setTimeout(() => {
      setReservas([
        {
          id: 1,
          nombre_cliente: "Juan Pérez",
          fecha_entrada: "2025-06-01",
          fecha_salida: "2025-06-05",
          estado: "pagada",
          total: 320.5,
        },
        {
          id: 2,
          nombre_cliente: "Juan Pérez",
          fecha_entrada: "2025-07-10",
          fecha_salida: "2025-07-15",
          estado: "pagada",
          total: 450,
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <Box sx={{ mt: 4, fontFamily: "'Montserrat', Arial, sans-serif" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        sx={{ mb: 4, fontFamily: "'Montserrat', Arial, sans-serif" }}
      >
        Mis Reservas
      </Typography>
      {loading ? (
        <Typography align="center">Cargando reservas...</Typography>
      ) : reservas.length === 0 ? (
        <Typography align="center">No tienes reservas registradas.</Typography>
      ) : (
        reservas.map(reserva => (
          <ReservaCardCliente key={reserva.id} reserva={reserva} />
        ))
      )}
    </Box>
  );
};

export default MisReservas;