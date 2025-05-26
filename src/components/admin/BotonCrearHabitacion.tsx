import React from "react";
import { Button, useTheme } from "@mui/material";

/**
 * Botón reutilizable para enviar el formulario de creación de habitación.
 * Usa el theme global y es responsivo.
 */
interface BotonCrearHabitacionProps {
  loading?: boolean;
  disabled?: boolean;
}

const BotonCrearHabitacion: React.FC<BotonCrearHabitacionProps> = ({ loading = false, disabled = false }) => {
  const theme = useTheme();
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      sx={{
        mt: 2,
        fontWeight: 700,
        fontFamily: theme.typography.button.fontFamily,
        borderRadius: 3,
        fontSize: { xs: "1rem", sm: "1.1rem" },
        py: 1.2,
      }}
      fullWidth
      disabled={disabled || loading}
    >
      {loading ? "Creando..." : "Crear habitación"}
    </Button>
  );
};

export default BotonCrearHabitacion;