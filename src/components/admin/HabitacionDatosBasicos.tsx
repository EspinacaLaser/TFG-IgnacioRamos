import React from "react";
import { TextField, MenuItem, Stack } from "@mui/material";

const estados = [
  { value: "disponible", label: "Disponible" },
  { value: "mantenimiento", label: "Mantenimiento" },
];

interface Props {
  datos: {
    numero: string;
    estado: string;
    capacidad: string | number;
    precio_base: string | number;
  };
  setDatos: (d: any) => void;
}

const HabitacionDatosBasicos: React.FC<Props> = ({ datos, setDatos }) => (
  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
    <TextField
      label="Número"
      value={datos.numero}
      onChange={e => setDatos((prev: any) => ({ ...prev, numero: e.target.value }))}
      required
      inputProps={{ maxLength: 10 }}
      sx={{ flex: 1 }}
    />
    <TextField
      select
      label="Estado"
      value={datos.estado}
      onChange={e => setDatos((prev: any) => ({ ...prev, estado: e.target.value }))}
      sx={{ flex: 1 }}
    >
      {estados.map(opt => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </TextField>
    <TextField
      label="Capacidad"
      type="number"
      value={datos.capacidad}
      onChange={e => setDatos((prev: any) => ({ ...prev, capacidad: e.target.value }))}
      required
      inputProps={{ min: 1, max: 10 }}
      sx={{ flex: 1 }}
    />
    <TextField
      label="Precio base (€)"
      type="number"
      value={datos.precio_base}
      onChange={e => setDatos((prev: any) => ({ ...prev, precio_base: e.target.value }))}
      required
      inputProps={{ min: 1, step: 0.01 }}
      sx={{ flex: 1 }}
    />
  </Stack>
);

export default HabitacionDatosBasicos;