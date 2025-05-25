/**
 * Muestra el resumen de la habitación seleccionada en la reserva:
 * - Imagen destacada
 * - Detalle de precios (base, IVA, total)
 * - Selección de extras (bufet desayuno, plaza de garaje)
 */
import Box from "@mui/material/Box";
import ReservaImagenHabitacion from "./ReservaImagenHabitacion";
import ReservaPrecioDetalle from "./ReservaPrecioDetalle";
import ReservaExtrasSelector from "./ReservaExtrasSelector";

interface ReservaResumenHabitacionProps {
  imagen: string;
  precioBase: number;
  noches: number;
  extras: { bufet: boolean; parking: boolean };
  onExtrasChange: (extras: { bufet: boolean; parking: boolean }) => void;
}

const ReservaResumenHabitacion: React.FC<ReservaResumenHabitacionProps> = ({
  imagen,
  precioBase,
  noches,
  extras,
  onExtrasChange,
}) => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
    <ReservaImagenHabitacion imagen={imagen} />
    <ReservaPrecioDetalle precioBase={precioBase} noches={noches} extras={extras} />
    <ReservaExtrasSelector extras={extras} onExtrasChange={onExtrasChange} />
  </Box>
);

export default ReservaResumenHabitacion;