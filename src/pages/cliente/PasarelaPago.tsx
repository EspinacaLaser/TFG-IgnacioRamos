import { useLocation } from "react-router-dom";
import { useState } from "react";
import ResumenReservaPago from "../../components/pago/ResumenReservaPago";
import FormularioPagoFicticio from "../../components/pago/FormularioPagoFicticio";
import ConfirmaCompra from "../../components/pago/ConfirmaCompra";
import AlertaPagoExitoso from "../../components/pago/AlertaPagoExitoso";
import AvisoSimulacionPago from "../../components/pago/AvisoSimulacionPago";
import LoaderPago from "../../components/pago/LoaderPago";
import { useAuth } from "../../context/AuthContext"; // Importa el contexto

/**
 * Página de pasarela de pago.
 * - Muestra resumen, formulario ficticio y botón de confirmar.
 * - Al confirmar, llama al endpoint para guardar la reserva.
 */
const PasarelaPago: React.FC = () => {
  const location = useLocation();
  const { usuario } = useAuth(); // Obtiene el usuario logueado
  const [loading, setLoading] = useState(false);
  const [exito, setExito] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Recoge los datos de la reserva desde el estado de navegación
  const { datos, fechas, noches, total, habitacion_id, extras } = location.state || {};

  // Usa el cliente_id real del usuario logueado
  const cliente_id = usuario?.cliente_id;

  // Llama al endpoint para confirmar la reserva
  const handleConfirmar = async () => {
    if (!cliente_id) {
      setError("No se ha encontrado el usuario. Por favor, inicia sesión de nuevo.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost/hotel-api/confirmar_reserva.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cliente_id,
          habitacion_id,
          fecha_entrada: fechas.entrada,
          fecha_salida: fechas.salida,
          total,
          bufet: extras?.bufet ? 1 : 0,
          parking: extras?.parking ? 1 : 0,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setExito(true);
      } else {
        setError(data.error || "Error al confirmar la reserva.");
      }
    } catch (e) {
      setError("Error de conexión con el servidor.");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 420, margin: "0 auto", padding: 16 }}>
      <AvisoSimulacionPago />
      <ResumenReservaPago datos={datos} fechas={fechas} noches={noches} total={total} />
      <FormularioPagoFicticio />
      {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
      {loading && <LoaderPago />}
      {exito && <AlertaPagoExitoso />}
      {!exito && (
        <ConfirmaCompra onConfirm={handleConfirmar} loading={loading} />
      )}
    </div>
  );
};

export default PasarelaPago;