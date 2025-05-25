import React from "react";
import FilaReservaRecepcionista, { type ReservaRecepcionista } from "./FilaReservaRecepcionista";
import { useTheme } from "@mui/material/styles";

/**
 * Props para la tabla de reservas.
 */
interface TablaReservasRecepcionistaProps {
  reservas: ReservaRecepcionista[];
}

/**
 * Tabla que muestra todas las reservas en formato filas, con estilos y separadores.
 */
const TablaReservasRecepcionista: React.FC<TablaReservasRecepcionistaProps> = ({ reservas }) => {
  const theme = useTheme();

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: 0,
          background: theme.palette.background.paper,
          boxShadow: theme.shadows[2],
          borderRadius: 8,
          marginTop: 12,
          border: `2px solid ${theme.palette.secondary.main}`, // Borde exterior
          fontFamily: theme.typography.body1.fontFamily,
          fontSize: theme.typography.body1.fontSize,
        }}
      >
        <thead>
          <tr style={{ background: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
            <th style={{ padding: "12px 8px", borderTopLeftRadius: 8 }}>ID</th>
            <th style={{ padding: "12px 8px" }}>Cliente</th>
            <th style={{ padding: "12px 8px" }}>Habitación</th>
            <th style={{ padding: "12px 8px" }}>Entrada</th>
            <th style={{ padding: "12px 8px" }}>Salida</th>
            <th style={{ padding: "12px 8px", borderTopRightRadius: 8 }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva, idx) => (
            <React.Fragment key={reserva.id}>
              <FilaReservaRecepcionista reserva={reserva} />
              {/* Separador visual entre filas, menos en la última */}
              {idx < reservas.length - 1 && (
                <tr>
                  <td colSpan={6}>
                    <div
                      style={{
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        margin: 0,
                        width: "100%",
                      }}
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaReservasRecepcionista;