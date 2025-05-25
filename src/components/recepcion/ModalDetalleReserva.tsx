import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Divider } from "@mui/material";
import { type ReservaRecepcionista } from "./FilaReservaRecepcionista";

interface ModalDetalleReservaProps {
    open: boolean;
    onClose: () => void;
    reserva: ReservaRecepcionista | null;
}

/**
 * Modal que muestra información ampliada de la reserva seleccionada.
 */
const ModalDetalleReserva: React.FC<ModalDetalleReservaProps> = ({ open, onClose, reserva }) => {
    if (!reserva) return null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Detalle de la reserva</DialogTitle>
            <DialogContent dividers>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2">Datos del cliente:</Typography>
                    <Typography variant="body1">{reserva.nombre_cliente} (ID: {reserva.cliente_id})</Typography>
                    <Typography variant="body2" color="text.secondary">{reserva.email_cliente}</Typography>
                    <Typography variant="body2" color="text.secondary">{reserva.telefono_cliente}</Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2">Datos de la habitación:</Typography>
                    <Typography variant="body1">{reserva.nombre_habitacion} (Nº {reserva.numero_habitacion})</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Capacidad: {reserva.capacidad} <br />
                        {reserva.descripcion_habitacion}
                    </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2">Fechas:</Typography>
                    <Typography variant="body1">
                        Entrada: {reserva.fecha_entrada} <br />
                        Salida: {reserva.fecha_salida}
                    </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2">Estado:</Typography>
                    <Typography variant="body1">{reserva.estado}</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2">Extras:</Typography>
                    <Typography variant="body1">
                        Bufet: {reserva.bufet ? "Sí" : "No"} <br />
                        Parking: {reserva.parking ? "Sí" : "No"}
                    </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2">Total:</Typography>
                    <Typography variant="body1" fontWeight="bold">
                        {Number(reserva.total).toFixed(2)} €
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="contained" color="primary">
                    Cerrar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalDetalleReserva;