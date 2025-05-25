import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Box } from "@mui/material";
import InputConfirmarBorrado from "./InputConfirmarBorrado";
import BotoneraConfirmarBorrado from "./BotoneraConfirmarBorrado";
import { type ReservaRecepcionista } from "./FilaReservaRecepcionista";
import { useTheme } from "@mui/material/styles";

/**
 * Props para el modal de confirmación de borrado de reserva.
 */
interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  reserva: ReservaRecepcionista | null;
}

/**
 * Modal que pide confirmación para borrar una reserva.
 * El usuario debe escribir "CONFIRMAR" para habilitar el botón de borrado.
 */
const ModalBorrarReserva: React.FC<Props> = ({ open, onClose, onConfirm, reserva }) => {
  const [input, setInput] = useState("");
  const theme = useTheme();

  if (!reserva) return null;

  // Solo se puede confirmar si el input es exactamente "CONFIRMAR"
  const puedeConfirmar = input === "CONFIRMAR";

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle
        sx={{
          background: theme.palette.error.main,
          color: theme.palette.error.contrastText,
          fontFamily: theme.typography.h6.fontFamily,
        }}
      >
        ¿Borrar reserva?
      </DialogTitle>
      <DialogContent
        sx={{
          background: theme.palette.background.paper,
          fontFamily: theme.typography.body1.fontFamily,
        }}
      >
        <Typography sx={{ color: theme.palette.text.primary }}>
          Para borrar la reserva de <b>{reserva.nombre_cliente}</b> (habitación {reserva.nombre_habitacion}), escribe <b>CONFIRMAR</b> en el campo inferior.
        </Typography>
        <Box sx={{ mt: 2 }}>
          {/* Input controlado para escribir "CONFIRMAR" */}
          <InputConfirmarBorrado value={input} onChange={setInput} />
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          background: theme.palette.background.default,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        {/* Botonera con Confirmar y Cancelar */}
        <BotoneraConfirmarBorrado
          puedeConfirmar={puedeConfirmar}
          onConfirm={onConfirm}
          onCancel={onClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ModalBorrarReserva;