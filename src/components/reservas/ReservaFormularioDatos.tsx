import Box from "@mui/material/Box";
import ReservaFechasSelector from "./ReservaFechasSelector";
import ReservaDatosPersonalesForm from "./ReservaDatosPersonalesForm";

/**
 * Props del formulario de datos de reserva.
 */
interface ReservaFormularioDatosProps {
  fechas: { entrada: string; salida: string };
  onFechasChange: (fechas: { entrada: string; salida: string }) => void;
  datos: { nombre: string; email: string; telefono: string; prefijo: string };
  onDatosChange: (datos: { nombre: string; email: string; telefono: string; prefijo: string }) => void;
  noches: number;
  total: number;
  habitacion_id: number; // <-- Añadido aquí
}

/**
 * Componente que agrupa el selector de fechas y el formulario de datos personales.
 */
const ReservaFormularioDatos: React.FC<ReservaFormularioDatosProps> = ({
  fechas,
  onFechasChange,
  datos,
  onDatosChange,
  noches,
  total,
  habitacion_id, // <-- Añadido aquí
}) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
    <ReservaFechasSelector fechas={fechas} onFechasChange={onFechasChange} />
    <ReservaDatosPersonalesForm
      datos={datos}
      onDatosChange={onDatosChange}
      fechas={fechas}
      noches={noches}
      total={total}
      habitacion_id={habitacion_id} // <-- Añadido aquí
    />
  </Box>
);

export default ReservaFormularioDatos;