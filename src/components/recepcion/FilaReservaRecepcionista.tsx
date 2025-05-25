import React from "react";

/**
 * Tipo para una reserva en la tabla del recepcionista.
 */
export interface ReservaRecepcionista {
  id: number;
  nombre_cliente: string;
  nombre_habitacion: string;
  fecha_entrada: string;
  fecha_salida: string;
  estado: string;
}

/**
 * Fila de la tabla de reservas.
 */
const FilaReservaRecepcionista: React.FC<{ reserva: ReservaRecepcionista }> = ({ reserva }) => (
  <tr>
    <td>{reserva.id}</td>
    <td>{reserva.nombre_cliente}</td>
    <td>{reserva.nombre_habitacion}</td>
    <td>{reserva.fecha_entrada}</td>
    <td>{reserva.fecha_salida}</td>
    <td>{reserva.estado}</td>
  </tr>
);

export default FilaReservaRecepcionista;