import React from "react";
import { useTheme } from "@mui/material/styles";

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
const FilaReservaRecepcionista: React.FC<{ reserva: ReservaRecepcionista }> = ({ reserva }) => {
  const theme = useTheme();
  return (
    <tr
      style={{
        fontFamily: theme.typography.body1.fontFamily,
        fontSize: theme.typography.body1.fontSize,
      }}
    >
      <td style={{ padding: "10px 8px" }}>{reserva.id}</td>
      <td style={{ padding: "10px 8px" }}>{reserva.nombre_cliente}</td>
      <td style={{ padding: "10px 8px" }}>{reserva.nombre_habitacion}</td>
      <td style={{ padding: "10px 8px" }}>{reserva.fecha_entrada}</td>
      <td style={{ padding: "10px 8px" }}>{reserva.fecha_salida}</td>
      <td style={{ padding: "10px 8px" }}>{reserva.estado}</td>
    </tr>
  );
};

export default FilaReservaRecepcionista;