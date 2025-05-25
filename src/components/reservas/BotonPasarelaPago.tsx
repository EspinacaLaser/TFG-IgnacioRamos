import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface BotonPasarelaPagoProps {
  datos: { nombre: string; email: string; telefono: string; prefijo: string };
  fechas: { entrada: string; salida: string };
  noches: number;
  total: number;
  disabled: boolean;
}

const BotonPasarelaPago: React.FC<BotonPasarelaPagoProps> = ({ datos, fechas, noches, total, disabled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Pasamos todos los datos necesarios a la página de pago
    navigate("/cliente/pago", { state: { datos, fechas, noches, total } });
  };

  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ mt: 2 }}
      disabled={disabled}
      onClick={handleClick}
      fullWidth
      
    >
      Pagar
    </Button>
  );
};

export default BotonPasarelaPago;