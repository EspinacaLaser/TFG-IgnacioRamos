import Box from "@mui/material/Box";
import ReservaFechasSelector from "./ReservaFechasSelector";
import ReservaDatosPersonalesForm from "./ReservaDatosPersonalesForm";

/**
 * Props del formulario de datos de reserva.
 * - fechas: objeto con fecha de entrada y salida.
 * - onFechasChange: función para actualizar las fechas.
 * - datos: datos personales del cliente.
 * - onDatosChange: función para actualizar los datos personales.
 * - noches: número de noches calculado.
 * - total: precio total calculado.
 */
interface ReservaFormularioDatosProps {
  fechas: { entrada: string; salida: string };
  onFechasChange: (fechas: { entrada: string; salida: string }) => void;
  datos: { nombre: string; email: string; telefono: string; prefijo: string };
  onDatosChange: (datos: { nombre: string; email: string; telefono: string; prefijo: string }) => void;
  noches: number;
  total: number;
}

/**
 * Componente que agrupa el selector de fechas y el formulario de datos personales.
 * Pasa los datos y funciones de cambio a los subcomponentes.
 */
const ReservaFormularioDatos: React.FC<ReservaFormularioDatosProps> = ({
  fechas,
  onFechasChange,
  datos,
  onDatosChange,
  noches,
  total,
}) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
    <ReservaFechasSelector fechas={fechas} onFechasChange={onFechasChange} />
    <ReservaDatosPersonalesForm
      datos={datos}
      onDatosChange={onDatosChange}
      fechas={fechas}
      noches={noches}
      total={total}
    />
  </Box>
);

export default ReservaFormularioDatos;