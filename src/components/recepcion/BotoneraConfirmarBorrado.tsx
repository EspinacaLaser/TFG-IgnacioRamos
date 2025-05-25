import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

/**
 * Props para la botonera de confirmación de borrado.
 */
interface Props {
  puedeConfirmar: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

/**
 * Botonera con los botones de cancelar y confirmar borrado.
 * Usa los colores y fuentes del theme.
 */
const BotoneraConfirmarBorrado: React.FC<Props> = ({ puedeConfirmar, onConfirm, onCancel }) => {
  const theme = useTheme();
  return (
    <>
      <Button
        onClick={onCancel}
        color="secondary"
        variant="outlined"
        sx={{
          fontFamily: theme.typography.button.fontFamily,
          fontWeight: 600,
        }}
      >
        Cancelar
      </Button>
      <Button
        onClick={onConfirm}
        color="error"
        variant="contained"
        disabled={!puedeConfirmar}
        sx={{
          fontFamily: theme.typography.button.fontFamily,
          fontWeight: 600,
        }}
      >
        Confirmar borrado
      </Button>
    </>
  );
};

export default BotoneraConfirmarBorrado;