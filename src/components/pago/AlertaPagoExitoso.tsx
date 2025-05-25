import Alert from "@mui/material/Alert";

/**
 * Muestra una alerta de éxito tras el pago ficticio.
 * Props:
 * - mensaje: texto a mostrar.
 */
const AlertaPagoExitoso: React.FC<{ mensaje?: string }> = ({ mensaje }) => (
  <Alert severity="success" sx={{ mt: 3 }}>
    {mensaje || "¡Pago realizado con éxito! Gracias por tu reserva."}
  </Alert>
);

export default AlertaPagoExitoso;