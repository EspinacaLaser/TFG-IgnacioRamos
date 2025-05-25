import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import BotonFactura from "./BotonFactura";

/**
 * Props para la card de reserva del cliente.
 */
export interface ReservaCardClienteProps {
  reserva: {
    id: number;
    nombre_cliente: string;
    nombre_habitacion: string;
    fecha_entrada: string;
    fecha_salida: string;
    estado: string;
    total: number;
  };
}

/**
 * Card que muestra la información principal de una reserva del cliente.
 * Incluye botón para descargar la factura.
 */
const ReservaCardCliente: React.FC<ReservaCardClienteProps> = ({ reserva }) => {
  // Función para descargar la factura PDF
  const handleDescargarFactura = () => {
    window.open(`http://localhost/hotel-api/factura_reserva.php?id=${reserva.id}`, "_blank");
  };

  return (
    <Card
      sx={{
        maxWidth: 420,
        margin: "32px auto",
        boxShadow: 4,
        borderRadius: 3,
        fontFamily: "'Montserrat', Arial, sans-serif",
        backgroundColor: "#f9fafb",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 2, fontFamily: "'Montserrat', Arial, sans-serif" }}
        >
          {reserva.nombre_habitacion}
        </Typography>
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Cliente:
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "'Montserrat', Arial, sans-serif" }}>
            {reserva.nombre_cliente}
          </Typography>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Fecha de entrada:
          </Typography>
          <Typography variant="body1">{reserva.fecha_entrada}</Typography>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Fecha de salida:
          </Typography>
          <Typography variant="body1">{reserva.fecha_salida}</Typography>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Estado:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: reserva.estado === "pagada" ? "#388e3c" : "#f57c00",
              fontWeight: "bold",
            }}
          >
            {reserva.estado.charAt(0).toUpperCase() + reserva.estado.slice(1)}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Total:
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {Number(reserva.total).toFixed(2)} €
          </Typography>
        </Box>
        {/* Aquí pasas la función al botón */}
        <BotonFactura onClick={handleDescargarFactura} />
      </CardContent>
    </Card>
  );
};

export default ReservaCardCliente;