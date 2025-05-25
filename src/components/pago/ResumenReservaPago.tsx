import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/**
 * Muestra un resumen de la reserva antes de proceder al pago.
 * Props:
 * - datos: datos personales del cliente.
 * - fechas: fechas de la reserva.
 * - noches: número de noches.
 * - total: precio total.
 */
interface ResumenReservaPagoProps {
  datos: { nombre: string; email: string; telefono: string; prefijo: string };
  fechas: { entrada: string; salida: string };
  noches: number;
  total: number;
}

const ResumenReservaPago: React.FC<ResumenReservaPagoProps> = ({ datos, fechas, noches, total }) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" gutterBottom>Resumen de tu reserva</Typography>
    <Typography>Nombre: <b>{datos.nombre}</b></Typography>
    <Typography>Email: <b>{datos.email}</b></Typography>
    <Typography>Teléfono: <b>{datos.prefijo} {datos.telefono}</b></Typography>
    <Typography>Entrada: <b>{fechas.entrada}</b></Typography>
    <Typography>Salida: <b>{fechas.salida}</b></Typography>
    <Typography>Noches: <b>{noches}</b></Typography>
    <Typography sx={{ fontWeight: "bold", color: "primary.main" }}>Total: {total} €</Typography>
  </Box>
);

export default ResumenReservaPago;