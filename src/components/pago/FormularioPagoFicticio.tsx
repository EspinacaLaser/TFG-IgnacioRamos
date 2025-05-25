import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

/**
 * Formulario ficticio para simular el pago con tarjeta.
 * No realiza ninguna validación real ni cobro.
 * Props:
 * - onChange: función para notificar cambios en los campos (opcional).
 */
const FormularioPagoFicticio: React.FC<{ onChange?: () => void }> = ({ onChange }) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
    <Typography variant="subtitle1">Introduce los datos de tu tarjeta (simulado)</Typography>
    <TextField label="Número de tarjeta" inputProps={{ maxLength: 16 }} onChange={onChange} />
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField label="Caducidad (MM/AA)" inputProps={{ maxLength: 5 }} onChange={onChange} />
      <TextField label="CVV" inputProps={{ maxLength: 3 }} onChange={onChange} />
    </Box>
    <TextField label="Titular de la tarjeta" onChange={onChange} />
  </Box>
);

export default FormularioPagoFicticio;