import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Alert, useTheme } from "@mui/material";
import TablaClientes from "./TablaClientes";

/**
 * Componente principal que obtiene y muestra el listado de clientes.
 */
const ListadoClientes: React.FC = () => {
  const theme = useTheme();
  const [clientes, setClientes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost/hotel-api/listar_clientes.php")
      .then(res => res.json())
      .then(data => {
        setClientes(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo cargar el listado de clientes.");
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
          fontWeight: 700,
        }}
      >
        Listado de clientes registrados
      </Typography>
      {loading && <CircularProgress color="primary" />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && <TablaClientes clientes={clientes} />}
    </Box>
  );
};

export default ListadoClientes;