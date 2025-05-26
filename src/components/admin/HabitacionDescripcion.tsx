import React from "react";
import { TextField } from "@mui/material";

interface Props {
  descripcion: string;
  setDescripcion: (d: string) => void;
}

const HabitacionDescripcion: React.FC<Props> = ({ descripcion, setDescripcion }) => (
  <TextField
    label="Descripción"
    value={descripcion}
    onChange={e => setDescripcion(e.target.value)}
    multiline
    minRows={2}
    sx={{ width: "100%" }}
  />
);

export default HabitacionDescripcion;