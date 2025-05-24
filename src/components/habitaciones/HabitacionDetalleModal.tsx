/**
 * Modal de detalle de habitación.
 * Muestra la galería de imágenes, los datos principales, los iconos de características
 * y la política de cancelación.
 * Reutiliza colores y tipografías del theme.
 */
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import GaleriaImagenesHabitacion from "./GaleriaImagenesHabitacion";
import IconosCaracteristicasHabitacion from "./IconosCaracteristicasHabitacion";
import PoliticaCancelacion from "./PoliticaCancelacion";

interface HabitacionDetalleModalProps {
  open: boolean;
  onClose: () => void;
  habitacion: {
    numero: string;
    estado: string;
    capacidad: number;
    descripcion: string;
    imagenes: string[];
    // Puedes añadir más campos si los necesitas
  };
}

const HabitacionDetalleModal: React.FC<HabitacionDetalleModalProps> = ({
  open, onClose, habitacion
}) => (
  <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
    <DialogTitle
      sx={{
        fontFamily: "'Montserrat', Arial, sans-serif",
        fontWeight: 700,
        fontSize: "2rem",
        pr: 5,
      }}
    >
      Habitación {habitacion.numero}
      <IconButton
        aria-label="Cerrar"
        onClick={onClose}
        sx={{ position: "absolute", right: 16, top: 16, color: "grey.700" }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent dividers sx={{ fontFamily: "'Open Sans', Arial, sans-serif" }}>
      {/* Galería de imágenes */}
      <GaleriaImagenesHabitacion imagenes={habitacion.imagenes} numero={habitacion.numero} />
      {/* Estado, capacidad y descripción */}
      <Box sx={{ mt: 2 }}>
        <Typography sx={{ fontWeight: "bold", color: "text.primary" }}>
          Estado:{" "}
          <span style={{
            color:
              habitacion.estado.toLowerCase() === "disponible"
                ? "#388e3c"
                : habitacion.estado.toLowerCase() === "mantenimiento"
                ? "#fbc02d"
                : habitacion.estado.toLowerCase() === "ocupada"
                ? "#b71c1c"
                : undefined,
            fontWeight: 700,
          }}>
            {habitacion.estado.charAt(0).toUpperCase() + habitacion.estado.slice(1)}
          </span>
        </Typography>
        <Typography>
          Capacidad: {habitacion.capacidad} personas
        </Typography>
        <Typography sx={{ mt: 1 }}>
          {habitacion.descripcion}
        </Typography>
      </Box>
      {/* Iconos de características */}
      <Box sx={{ mt: 3 }}>
        <IconosCaracteristicasHabitacion />
      </Box>
      {/* Política de cancelación */}
      <Box sx={{ mt: 4 }}>
        <PoliticaCancelacion />
      </Box>
    </DialogContent>
  </Dialog>
);

export default HabitacionDetalleModal;