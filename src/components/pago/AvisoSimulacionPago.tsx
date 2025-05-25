import Alert from "@mui/material/Alert";

/**
 * Aviso visible de que la pasarela de pago es ficticia.
 */
const AvisoSimulacionPago: React.FC = () => (
  <Alert severity="info" sx={{ mb: 2 }}>
    Esta pasarela de pago es una simulación para fines académicos. No se realiza ningún cobro real.
  </Alert>
);

export default AvisoSimulacionPago;