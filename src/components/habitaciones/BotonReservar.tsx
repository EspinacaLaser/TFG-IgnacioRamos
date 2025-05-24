import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface BotonReservarProps {
  habitacionId: string | number;
  disabled?: boolean;
}

const BotonReservar: React.FC<BotonReservarProps> = ({ habitacionId, disabled }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate(`/cliente/reservar/${habitacionId}`)}
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
};

export default BotonReservar;