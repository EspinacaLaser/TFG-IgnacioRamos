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
  habitacion_id: number; // <-- Añade esto
}

const BotonPasarelaPago: React.FC<BotonPasarelaPagoProps> = ({
  datos,
  fechas,
  noches,
  total,
  disabled,
  habitacion_id, // <-- Añade esto
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cliente/pago", {
      state: {
        datos,
        fechas,
        noches,
        total,
        habitacion_id, // <-- Añade esto
      },
    });
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