import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

/**
 * Props para la card de reserva del cliente.
 */
export interface ReservaCardClienteProps {
  reserva: {
    id: number;
    nombre_cliente: string;
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
const ReservaCardCliente: React.FC<ReservaCardClienteProps> = ({ reserva }) => (
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
        Reserva #{reserva.id}
      </Typography>
      <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle2" color="text.secondary">
          Nombre:
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
          {reserva.total.toFixed(2)} €
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        sx={{
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontWeight: "bold",
          letterSpacing: 1,
          borderRadius: 2,
          mt: 1,
        }}
        // onClick={handleDescargarFactura} // Se implementará más adelante
      >
        DESCARGAR FACTURA
      </Button>
    </CardContent>
  </Card>
);

export default ReservaCardCliente;