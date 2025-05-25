import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ReservaCardCliente from "../../components/reservas/ReservaCardCliente";
import { useAuth } from "../../context/AuthContext"; // Ajusta la ruta según la ubicación del archivo

/**
 * Página "Mis Reservas" para el cliente.
 * Muestra una lista de cards con las reservas del usuario autenticado.
 */
const MisReservas: React.FC = () => {
  const { usuario } = useAuth(); // Debe devolver el usuario logueado con cliente_id
  const [reservas, setReservas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!usuario?.cliente_id) {
      setLoading(false);
      return;
    }
    fetch(`http://localhost/hotel-api/reservas_cliente.php?cliente_id=${usuario.cliente_id}`)
      .then(res => res.json())
      .then(data => {
        setReservas(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [usuario]);

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