import React, { useState } from "react";
import BotoneraAdmin from "../../components/admin/BotoneraAdmin";
import CrearHabitacionForm from "../../components/admin/CrearHabitacionForm";
import ListadoClientes from "../../components/admin/ListadoClientes";
import ListadoRecepcionistas from "../../components/admin/ListadoRecepcionistas";
import { Box, Typography, Paper } from "@mui/material";

/**
 * Página principal del administrador.
 * Cambia el contenido según el botón seleccionado en la botonera.
 */
const AdminHome: React.FC = () => {
  const [vista, setVista] = useState<"crear" | "clientes" | "trabajadores">("crear");

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        p: { xs: 1, sm: 3 },
        minHeight: "80vh",
      }}
    >
      <BotoneraAdmin vista={vista} setVista={setVista} />
      {vista === "crear" && (
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },
            mt: 2,
            borderRadius: 3,
            backgroundColor: "background.paper",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: theme => theme.typography.h4.fontFamily,
              color: theme => theme.palette.primary.main,
              mb: 2,
              fontWeight: 700,
            }}
          >
            Crear habitación
          </Typography>
          <CrearHabitacionForm />
        </Paper>
      )}
      {vista === "clientes" && (
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },
            mt: 2,
            borderRadius: 3,
            backgroundColor: "background.paper",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: theme => theme.typography.h4.fontFamily,
              color: theme => theme.palette.primary.main,
              mb: 2,
              fontWeight: 700,
            }}
          >
            Listado de clientes
          </Typography>
          <ListadoClientes />
        </Paper>
      )}
      {vista === "trabajadores" && (
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },
            mt: 2,
            borderRadius: 3,
            backgroundColor: "background.paper",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: theme => theme.typography.h4.fontFamily,
              color: theme => theme.palette.primary.main,
              mb: 2,
              fontWeight: 700,
            }}
          >
            Listado de trabajadores
          </Typography>
          <ListadoRecepcionistas />
        </Paper>
      )}
    </Box>
  );
};

export default AdminHome;