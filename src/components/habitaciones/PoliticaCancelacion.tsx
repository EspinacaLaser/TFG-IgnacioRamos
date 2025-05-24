/**
 * Política de cancelación de la reserva.
 * Muestra un texto informativo destacado con fondo suave.
 * Usa la fuente secundaria y el color warning del theme.
 */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const PoliticaCancelacion: React.FC = () => (
  <Box
    sx={{
      bgcolor: "warning.main",
      color: "warning.contrastText",
      borderRadius: 2,
      p: 2,
      display: "flex",
      alignItems: "center",
      gap: 2,
    }}
  >
    <WarningAmberIcon sx={{ fontSize: 32 }} />
    <Typography
      sx={{
        fontFamily: "'Open Sans', Arial, sans-serif",
        fontWeight: 500,
        fontSize: "1rem",
      }}
    >
      Puedes cancelar tu reserva sin coste hasta 24 horas antes de la fecha de entrada. Consulta condiciones en recepción.
    </Typography>
  </Box>
);

export default PoliticaCancelacion;