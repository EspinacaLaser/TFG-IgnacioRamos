/**
 * Muestra la imagen destacada de la habitación seleccionada.
 */
import Box from "@mui/material/Box";

interface ReservaImagenHabitacionProps {
  imagen: string;
}

const ReservaImagenHabitacion: React.FC<ReservaImagenHabitacionProps> = ({ imagen }) => (
  <Box sx={{ width: 260, height: 160, mb: 2 }}>
    <img
      src={imagen}
      alt="Imagen destacada habitación"
      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 8 }}
    />
  </Box>
);

export default ReservaImagenHabitacion;