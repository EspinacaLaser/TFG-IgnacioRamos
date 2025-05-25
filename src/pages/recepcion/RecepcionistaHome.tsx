import React, { useState, useEffect, useCallback } from "react";
import BotoneraRecepcionista from "../../components/recepcion/BotoneraRecepcionista";
import TablaReservasRecepcionista from "../../components/recepcion/TablaReservasRecepcionista";
import RegistroJornadaRecepcionista from "../../components/recepcion/RegistroJornadaRecepcionista";

/**
 * Página principal del recepcionista.
 * Permite alternar entre la vista de reservas y el control de registro.
 */
const RecepcionistaHome: React.FC = () => {
  const [vista, setVista] = useState<"reservas" | "registro">("reservas");
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para cargar reservas (igual que antes)
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
        <RegistroJornadaRecepcionista />
      )}
    </div>
  );
};

export default RecepcionistaHome;