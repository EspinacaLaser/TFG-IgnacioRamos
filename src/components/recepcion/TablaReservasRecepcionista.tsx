import React from "react";
import FilaReservaRecepcionista, { type ReservaRecepcionista } from "./FilaReservaRecepcionista";

/**
 * Props para la tabla de reservas.
 */
interface TablaReservasRecepcionistaProps {
  reservas: ReservaRecepcionista[];
}

/**
 * Tabla que muestra todas las reservas en formato filas.
 */
const TablaReservasRecepcionista: React.FC<TablaReservasRecepcionistaProps> = ({ reservas }) => (
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Cliente</th>
        <th>Habitación</th>
        <th>Entrada</th>
        <th>Salida</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
      {reservas.map(reserva => (
        <FilaReservaRecepcionista key={reserva.id} reserva={reserva} />
      ))}
    </tbody>
  </table>
);

export default TablaReservasRecepcionista;