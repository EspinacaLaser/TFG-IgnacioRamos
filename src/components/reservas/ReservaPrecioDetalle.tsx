import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/**
 * Props del detalle de precio de la reserva.
 * - precioBase: precio base por noche.
 * - noches: número de noches.
 * - extras: extras seleccionados.
 */
interface ReservaPrecioDetalleProps {
  precioBase: number | string;
  noches: number;
  extras: { bufet: boolean; parking: boolean };
}

const PRECIO_BUFET = 8;
const PRECIO_PARKING = 12;

/**
 * Componente que muestra el desglose del precio de la reserva:
 * - Precio base por noches
 * - IVA
 * - Extras seleccionados
 * - Total
 */
const ReservaPrecioDetalle: React.FC<ReservaPrecioDetalleProps> = ({ precioBase, noches, extras }) => {
  // Calcula el precio base total por noches
  const base = (Number(precioBase) || 0) * (noches || 0);
  const iva = +(base * 0.10).toFixed(2);
  const extrasTotal =
    (extras.bufet ? PRECIO_BUFET : 0) * (noches || 0) +
    (extras.parking ? PRECIO_PARKING : 0) * (noches || 0);
  const total = +(base + iva + extrasTotal).toFixed(2);

  return (
    <Box sx={{ width: "100%", mb: 2 }}>
      <Typography>
        Precio base ({noches} noche{noches === 1 ? "" : "s"}): <b>{base.toFixed(2)} €</b>
      </Typography>
      <Typography>
        10% de IVA: <b>{iva.toFixed(2)} €</b>
      </Typography>
      {extras.bufet && (
        <Typography>
          Bufet desayuno: <b>{((PRECIO_BUFET) * (noches || 0)).toFixed(2)} €</b>
        </Typography>
      )}
      {extras.parking && (
        <Typography>
          Plaza de garaje: <b>{((PRECIO_PARKING) * (noches || 0)).toFixed(2)} €</b>
        </Typography>
      )}
      <Typography sx={{ mt: 1, fontWeight: "bold", color: "primary.main" }}>
        Total: {total.toFixed(2)} €
      </Typography>
    </Box>
  );
};

export default ReservaPrecioDetalle;