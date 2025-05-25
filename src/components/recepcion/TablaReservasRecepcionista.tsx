import React, { useState } from "react";
import FilaReservaRecepcionista, { type ReservaRecepcionista } from "./FilaReservaRecepcionista";
import ModalDetalleReserva from "./ModalDetalleReserva";
import ModalBorrarReserva from "./ModalBorrarReserva";
import { useTheme } from "@mui/material/styles";

/**
 * Props para la tabla de reservas.
 * Incluye la función para recargar reservas tras borrar.
 */
interface TablaReservasRecepcionistaProps {
  reservas: ReservaRecepcionista[];
  recargarReservas: () => void;
}

/**
 * Tabla que muestra todas las reservas en formato filas, con estilos y separadores.
 * Incluye columna para ver detalle y borrar.
 */
const TablaReservasRecepcionista: React.FC<TablaReservasRecepcionistaProps> = ({ reservas, recargarReservas }) => {
  const theme = useTheme();
  const [detalleOpen, setDetalleOpen] = useState(false);
  const [reservaDetalle, setReservaDetalle] = useState<ReservaRecepcionista | null>(null);

  const [borrarOpen, setBorrarOpen] = useState(false);
  const [reservaBorrar, setReservaBorrar] = useState<ReservaRecepcionista | null>(null);

  // Lógica para ver detalle
  const handleVerDetalle = (reserva: ReservaRecepcionista) => {
    setReservaDetalle(reserva);
    setDetalleOpen(true);
  };

  const handleCloseDetalle = () => {
    setDetalleOpen(false);
    setReservaDetalle(null);
  };

  // Lógica para borrar reserva
  const handleBorrar = (reserva: ReservaRecepcionista) => {
    setReservaBorrar(reserva);
    setBorrarOpen(true);
  };

  const handleCloseBorrar = () => {
    setBorrarOpen(false);
    setReservaBorrar(null);
  };

  /**
   * Llama al endpoint de borrado y refresca la tabla tras éxito.
   * Cierra el modal de confirmación.
   */
  const handleConfirmarBorrado = async () => {
    if (!reservaBorrar) return;
    try {
      await fetch("http://localhost/hotel-api/borrar_reserva.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reserva_id: reservaBorrar.id }),
      });
      await recargarReservas(); // Refresca la lista tras borrar
    } catch (e) {
      // Maneja el error si lo deseas
    }
    setBorrarOpen(false);
    setReservaBorrar(null);
  };

  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <table
        style={{
          width: "100%",
          minWidth: 700,
          borderCollapse: "separate",
          borderSpacing: 0,
          background: theme.palette.background.paper,
          boxShadow: theme.shadows[2],
          borderRadius: 8,
          marginTop: 12,
          border: `2px solid ${theme.palette.secondary.main}`,
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
            <th style={{ padding: "12px 8px" }}>Estado</th>
            <th style={{ padding: "12px 8px", textAlign: "center" }}>Detalle</th>
            <th style={{ padding: "12px 8px", borderTopRightRadius: 8, textAlign: "center" }}>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva, idx) => (
            <React.Fragment key={reserva.id}>
              <FilaReservaRecepcionista
                reserva={reserva}
                onVerDetalle={handleVerDetalle}
                onBorrar={handleBorrar}
              />
              {idx < reservas.length - 1 && (
                <tr>
                  <td colSpan={8}>
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
      {/* Modales para detalle y confirmación de borrado */}
      <ModalDetalleReserva
        open={detalleOpen}
        onClose={handleCloseDetalle}
        reserva={reservaDetalle}
      />
      <ModalBorrarReserva
        open={borrarOpen}
        onClose={handleCloseBorrar}
        onConfirm={handleConfirmarBorrado}
        reserva={reservaBorrar}
      />
    </div>
  );
};

export default TablaReservasRecepcionista;