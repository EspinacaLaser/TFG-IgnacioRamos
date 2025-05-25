import React, { useState, useEffect } from "react";
import BotoneraRecepcionista from "../../components/recepcion/BotoneraRecepcionista";
import TablaReservasRecepcionista from "../../components/recepcion/TablaReservasRecepcionista";

/**
 * Página principal del recepcionista.
 * Permite alternar entre la vista de reservas y el control de registro.
 * Hace fetch de las reservas reales desde el backend.
 */
const RecepcionistaHome: React.FC = () => {
  const [vista, setVista] = useState<"reservas" | "registro">("reservas");
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (vista === "reservas") {
      setLoading(true);
      fetch("http://localhost/hotel-api/reservas_todas.php")
        .then(res => res.json())
        .then(data => {
          setReservas(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [vista]);

  return (
    <div>
      <BotoneraRecepcionista vista={vista} setVista={setVista} />
      {vista === "reservas" && (
        loading ? <div>Cargando reservas...</div> :
        <TablaReservasRecepcionista reservas={reservas} />
      )}
      {vista === "registro" && <div>Control de Registro (próximamente)</div>}
    </div>
  );
};

export default RecepcionistaHome;