import { useLocation } from "react-router-dom";

/**
 * Página de pasarela de pago.
 * - Recibe los datos de la reserva por location.state.
 * - Muestra el resumen de la reserva y el formulario de pago.
 * - Aquí se incluiría el botón de confirmar compra.
 */
const PasarelaPago: React.FC = () => {
  const location = useLocation();
  const { datos, fechas, noches, total } = location.state || {};

  // Muestra los datos y el formulario de pago aquí
  // Incluye el botón <ConfirmaCompra ... />

  return (
    <div>
      <h2>Resumen de tu reserva</h2>
      <p>Nombre: {datos?.nombre}</p>
      <p>Email: {datos?.email}</p>
      <p>Teléfono: {datos?.prefijo} {datos?.telefono}</p>
      <p>Entrada: {fechas?.entrada}</p>
      <p>Salida: {fechas?.salida}</p>
      <p>Noches: {noches}</p>
      <p>Total: {total} €</p>
      {/* Aquí el formulario de pago y el botón de confirmar */}
    </div>
  );
};

export default PasarelaPago;