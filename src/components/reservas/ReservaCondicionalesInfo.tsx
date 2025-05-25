import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/**
 * Muestra las condiciones de la reserva (pago, cancelación, privacidad).
 */
const ReservaCondicionalesInfo: React.FC = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="body2" color="text.secondary">
      <b>Condiciones de reserva:</b><br />
      - El pago se realiza en el hotel.<br />
      - Cancelación gratuita hasta 48h antes de la llegada.<br />
      - Los datos personales se tratarán según la política de privacidad.
    </Typography>
  </Box>
);

export default ReservaCondicionalesInfo;