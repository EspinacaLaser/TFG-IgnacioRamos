import Box from "@mui/material/Box";
import ReservaFechasSelector from "./ReservaFechasSelector";
import ReservaDatosPersonalesForm from "./ReservaDatosPersonalesForm";

interface ReservaFormularioDatosProps {
  fechas: { entrada: string; salida: string };
  onFechasChange: (fechas: { entrada: string; salida: string }) => void;
  datos: { nombre: string; email: string; telefono: string; prefijo: string };
  onDatosChange: (datos: { nombre: string; email: string; telefono: string; prefijo: string }) => void;
  noches: number;
  total: number;
}

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