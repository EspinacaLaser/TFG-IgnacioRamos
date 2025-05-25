import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

/**
 * Props del botón de pasarela de pago.
 * - datos: datos personales del cliente.
 * - fechas: fechas de la reserva.
 * - noches: número de noches.
 * - total: precio total.
 * - disabled: si el botón debe estar deshabilitado.
 */
interface BotonPasarelaPagoProps {
  datos: { nombre: string; email: string; telefono: string; prefijo: string };
  fechas: { entrada: string; salida: string };
  noches: number;
  total: number;
  disabled: boolean;
}

/**
 * Botón que redirige a la página de pago, pasando los datos de la reserva.
 * Usa React Router para navegar y pasar el estado.
 */
const BotonPasarelaPago: React.FC<BotonPasarelaPagoProps> = ({ datos, fechas, noches, total, disabled }) => {
  const navigate = useNavigate();

  // Al hacer click, navega a la página de pago y pasa los datos por state
  const handleClick = () => {
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