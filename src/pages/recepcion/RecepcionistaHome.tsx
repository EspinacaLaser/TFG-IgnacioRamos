import React, { useState, useEffect, useCallback } from "react";
import BotoneraRecepcionista from "../../components/recepcion/BotoneraRecepcionista";
import TablaReservasRecepcionista from "../../components/recepcion/TablaReservasRecepcionista";

/**
 * Página principal del recepcionista.
 * Permite alternar entre la vista de reservas y el control de registro.
 * Hace fetch de las reservas reales desde el backend.
 * Gestiona el estado de las reservas y la recarga tras borrar.
 */
const RecepcionistaHome: React.FC = () => {
  const [vista, setVista] = useState<"reservas" | "registro">("reservas");
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Función para cargar las reservas desde el backend.
   * Se usa también para refrescar la tabla tras borrar.
   */
  const fetchReservas = useCallback(() => {
    setLoading(true);
    fetch("http://localhost/hotel-api/reservas_todas.php")
      .then(res => res.json())
      .then(data => {
        setReservas(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Carga las reservas al montar el componente o al cambiar de vista
  useEffect(() => {
    if (vista === "reservas") {
      fetchReservas();
    }
  }, [vista, fetchReservas]);

  return (
    <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: 16 }}>
      <BotoneraRecepcionista vista={vista} setVista={setVista} />
      {vista === "reservas" && (
        loading ? (
          <div style={{ textAlign: "center", marginTop: 40 }}>Cargando reservas...</div>
        ) : (
          <TablaReservasRecepcionista reservas={reservas} recargarReservas={fetchReservas} />
        )
      )}
      {vista === "registro" && (
        <div style={{ textAlign: "center", marginTop: 40 }}>
          Control de Registro (próximamente)
        </div>
      )}
    </div>
  );
};

export default RecepcionistaHome;