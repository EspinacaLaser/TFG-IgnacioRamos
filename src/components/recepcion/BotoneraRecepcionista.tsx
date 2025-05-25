import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import TableChartIcon from "@mui/icons-material/TableChart";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

/**
 * Props para la botonera de navegación del recepcionista.
 */
interface BotoneraRecepcionistaProps {
  vista: "reservas" | "registro";
  setVista: (vista: "reservas" | "registro") => void;
}

/**
 * Botonera con iconos para cambiar entre vistas.
 */
const BotoneraRecepcionista: React.FC<BotoneraRecepcionistaProps> = ({ vista, setVista }) => (
  <ButtonGroup sx={{ mb: 3 }}>
    <Button
      variant={vista === "reservas" ? "contained" : "outlined"}
      startIcon={<TableChartIcon />}
      onClick={() => setVista("reservas")}
    >
      Ver reservas
    </Button>
    <Button
      variant={vista === "registro" ? "contained" : "outlined"}
      startIcon={<AssignmentIndIcon />}
      onClick={() => setVista("registro")}
    >
      Control de Registro
    </Button>
  </ButtonGroup>
);

export default BotoneraRecepcionista;