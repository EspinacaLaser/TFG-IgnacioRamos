import React, { useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import BotonRegistroHora from "./BotonRegistroHora";
import MensajeRegistro from "./MensajeRegistro";
import { useTheme } from "@mui/material/styles";

/**
 * Panel de control de registro de jornada para el recepcionista.
 * Permite fichar la hora de entrada y salida.
 * Usa Stack para una disposición moderna y responsiva.
 */
const RegistroJornadaRecepcionista: React.FC = () => {
  const theme = useTheme();
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [tipoMensaje, setTipoMensaje] = useState<"success" | "error">("success");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  // Callback para mostrar mensajes tras fichar
  const mostrarMensaje = (msg: string, tipo: "success" | "error") => {
    setMensaje(msg);
    setTipoMensaje(tipo);
    setTimeout(() => setMensaje(null), 3500);
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
          fontFamily: theme.typography.h4.fontFamily,
          color: theme.palette.primary.main,
        }}
      >
        Control de Registro de Jornada
      </Typography>
      {/* Stack para disposición moderna y responsiva */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ width: "100%", mb: 2 }}
      >
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            p: 3,
            background: theme.palette.background.paper,
            borderRadius: 3,
            textAlign: "center",
            minWidth: 260,
            maxWidth: 400,
            mx: "auto",
          }}
        >
          <BotonRegistroHora
            tipo="entrada"
            recepcionistaId={user?.id}
            onFeedback={mostrarMensaje}
          />
        </Paper>
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            p: 3,
            background: theme.palette.background.paper,
            borderRadius: 3,
            textAlign: "center",
            minWidth: 260,
            maxWidth: 400,
            mx: "auto",
          }}
        >
          <BotonRegistroHora
            tipo="salida"
            recepcionistaId={user?.id}
            onFeedback={mostrarMensaje}
          />
        </Paper>
      </Stack>
      {mensaje && (
        <Box sx={{ mt: 3 }}>
          <MensajeRegistro tipo={tipoMensaje} mensaje={mensaje} />
        </Box>
      )}
    </Box>
  );
};

export default RegistroJornadaRecepcionista;