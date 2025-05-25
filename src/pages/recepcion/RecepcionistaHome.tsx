import React, { useState } from "react";
import BotoneraRecepcionista from "../../components/recepcion/BotoneraRecepcionista";
import TablaReservasRecepcionista from "../../components/recepcion/TablaReservasRecepcionista";

/**
 * Página principal del recepcionista.
 * Permite alternar entre la vista de reservas y el control de registro.
 */
const RecepcionistaHome: React.FC = () => {
  const [vista, setVista] = useState<"reservas" | "registro">("reservas");

  // Ejemplo de datos de reservas (reemplaza por fetch real)
  const reservas = [
    {
      id: 1,
      nombre_cliente: "Juan Pérez",
      nombre_habitacion: "101",
      fecha_entrada: "2024-06-01",
      fecha_salida: "2024-06-05",
      estado: "pagada",
    },
    {
      id: 2,
      nombre_cliente: "Ana López",
      nombre_habitacion: "202",
      fecha_entrada: "2024-06-03",
      fecha_salida: "2024-06-07",
      estado: "pendiente",
    },
  ];

  return (
    <div>
      <BotoneraRecepcionista vista={vista} setVista={setVista} />
      {vista === "reservas" && <TablaReservasRecepcionista reservas={reservas} />}
      {vista === "registro" && <div>Control de Registro (próximamente)</div>}
    </div>
  );
};

export default RecepcionistaHome;