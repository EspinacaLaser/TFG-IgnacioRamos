/**
 * BotonDetalles: botón para ver detalles de una habitación.
 * Usa la fuente Montserrat y el color primario del tema.
 * Se deshabilita si la habitación no está disponible.
 */
import Button from "@mui/material/Button";

interface BotonDetallesProps {
  onClick: () => void;
  disabled?: boolean;
}

const BotonDetalles: React.FC<BotonDetallesProps> = ({ onClick, disabled }) => (
  <Button
    variant="outlined"
    color="primary"
    onClick={onClick}
    disabled={disabled}
    sx={{
      fontWeight: "bold",
      fontFamily: "'Montserrat', Arial, sans-serif",
      letterSpacing: 1,
    }}
  >
    Detalles
  </Button>
);

export default BotonDetalles;