import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Alert, useTheme } from "@mui/material";
import TablaJornadas from "./TablaJornadas";

/**
 * ListadoRecepcionistas
 * Muestra la tabla de jornadas de los recepcionistas (trabajadores) con datos de entrada y salida.
 * Usa el theme global para colores, fuentes y tamaños.
 */
const ListadoRecepcionistas: React.FC = () => {
  const theme = useTheme();
  const [jornadas, setJornadas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost/hotel-api/listar_jornadas.php")
      .then(res => res.json())
      .then(data => {
        setJornadas(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo cargar el listado de jornadas.");
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: theme.typography.h4.fontFamily,
          color: theme.palette.primary.main,
          mb: 3,
          fontWeight: theme.typography.h4.fontWeight,
          fontSize: theme.typography.h4.fontSize,
        }}
      >
        Jornadas de los recepcionistas
      </Typography>
      {loading && <CircularProgress color="primary" />}
      {error && (
        <Alert
          severity="error"
          sx={{
            fontFamily: theme.typography.body2.fontFamily,
            color: theme.palette.error.main,
            backgroundColor: theme.palette.error.contrastText,
          }}
        >
          {error}
        </Alert>
      )}
      {!loading && !error && <TablaJornadas jornadas={jornadas} />}
    </Box>
  );
};

export default ListadoRecepcionistas;