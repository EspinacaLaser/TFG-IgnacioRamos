import React from "react";
import { useTheme } from "@mui/material/styles";

/**
 * Tipo para una reserva en la tabla del recepcionista.
 */
export interface ReservaRecepcionista {
  id: number;
  nombre_cliente: string;
  email_cliente: string;
  telefono_cliente: string;
  cliente_id: number;
  nombre_habitacion: string;
  numero_habitacion: string;
  capacidad: number;
  descripcion_habitacion: string;
  fecha_entrada: string;
  fecha_salida: string;
  estado: string;
  bufet: number;
  parking: number;
  total: number;
}

/**
 * Props para la fila de la tabla de reservas.
 */
interface Props {
  reserva: ReservaRecepcionista;
  onVerDetalle: (reserva: ReservaRecepcionista) => void;
  onBorrar: (reserva: ReservaRecepcionista) => void;
}

/**
 * Fila de la tabla de reservas.
 * Añade botones para ver el detalle (centrado) y borrar.
 */
const FilaReservaRecepcionista: React.FC<Props> = ({ reserva, onVerDetalle, onBorrar }) => {
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
      <td style={{ padding: "10px 8px", textAlign: "center" }}>
        <button
          onClick={() => onVerDetalle(reserva)}
          style={{
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            border: "none",
            borderRadius: 4,
            padding: "4px 10px",
            cursor: "pointer",
            fontWeight: 600,
            display: "inline-block",
            minWidth: 90,
          }}
          title="Ver detalle"
        >
          Detalle
        </button>
      </td>
      <td style={{ padding: "10px 8px", textAlign: "center" }}>
        <button
          onClick={() => onBorrar(reserva)}
          style={{
            background: theme.palette.error.main,
            color: theme.palette.error.contrastText,
            border: "none",
            borderRadius: 4,
            padding: "4px 10px",
            cursor: "pointer",
            fontWeight: 600,
            display: "inline-block",
            minWidth: 90,
          }}
          title="Borrar reserva"
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default FilaReservaRecepcionista;