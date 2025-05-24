/**
 * BotonReservar: botón para reservar una habitación.
 * Usa la fuente Montserrat y el color primario del tema.
 * Se deshabilita si la habitación no está disponible.
 */
import Button from "@mui/material/Button";

interface BotonReservarProps {
  onClick: () => void;
  disabled?: boolean;
}

const BotonReservar: React.FC<BotonReservarProps> = ({ onClick, disabled }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    disabled={disabled}
    sx={{
      fontWeight: "bold",
      fontFamily: "'Montserrat', Arial, sans-serif",
      letterSpacing: 1,
    }}
  >
    Reservar
  </Button>
);

export default BotonReservar;