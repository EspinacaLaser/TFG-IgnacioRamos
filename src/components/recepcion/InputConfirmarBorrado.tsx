import React from "react";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

/**
 * Props para el input de confirmación de borrado.
 */
interface Props {
  value: string;
  onChange: (v: string) => void;
}

/**
 * Input controlado donde el usuario debe escribir "CONFIRMAR" para habilitar el borrado.
 * Usa los estilos y fuentes del theme.
 */
const InputConfirmarBorrado: React.FC<Props> = ({ value, onChange }) => {
  const theme = useTheme();
  return (
    <TextField
      label="Escribe CONFIRMAR para borrar"
      variant="outlined"
      fullWidth
      value={value}
      onChange={e => onChange(e.target.value)}
      autoFocus
      sx={{
        fontFamily: theme.typography.body1.fontFamily,
        input: {
          color: theme.palette.text.primary,
          fontFamily: theme.typography.body1.fontFamily,
        },
        label: {
          color: theme.palette.text.secondary,
          fontFamily: theme.typography.body1.fontFamily,
        },
      }}
    />
  );
};

export default InputConfirmarBorrado;