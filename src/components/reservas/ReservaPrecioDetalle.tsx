/**
 * Muestra el precio base, el IVA y el precio total de la reserva.
 * Suma los extras si están seleccionados.
 */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ReservaPrecioDetalleProps {
  precioBase: number;
  extras: { bufet: boolean; parking: boolean };
}

const PRECIO_BUFET = 8; // Puedes ajustar estos valores
const PRECIO_PARKING = 12;

const ReservaPrecioDetalle: React.FC<ReservaPrecioDetalleProps> = ({ precioBase, extras }) => {
  const iva = +(precioBase * 0.10).toFixed(2);
  const extrasTotal =
    (extras.bufet ? PRECIO_BUFET : 0) + (extras.parking ? PRECIO_PARKING : 0);
  const total = +(precioBase + iva + extrasTotal).toFixed(2);

  return (
    <Box sx={{ width: "100%", mb: 2 }}>
      <Typography>
        Precio base: <b>{precioBase.toFixed(2)} €</b>
      </Typography>
      <Typography>
        10% de IVA: <b>{iva.toFixed(2)} €</b>
      </Typography>
      {extras.bufet && (
        <Typography>
          Bufet desayuno: <b>{PRECIO_BUFET.toFixed(2)} €</b>
        </Typography>
      )}
      {extras.parking && (
        <Typography>
          Plaza de garaje: <b>{PRECIO_PARKING.toFixed(2)} €</b>
        </Typography>
      )}
      <Typography sx={{ mt: 1, fontWeight: "bold", color: "primary.main" }}>
        Total: {total.toFixed(2)} €
      </Typography>
    </Box>
  );
};

export default ReservaPrecioDetalle;