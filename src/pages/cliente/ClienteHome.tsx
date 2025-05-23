import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const ClienteHome: React.FC = () => (
  <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      Bienvenido, Cliente
    </Typography>
    <Typography variant="body1" gutterBottom>
      Desde aquí puedes ver habitaciones, hacer reservas y consultar tus facturas.
    </Typography>
    {/* Aquí puedes añadir botones o enlaces a otras secciones */}
    <Box mt={3}>
      {/* Ejemplo de botón MUI para futuras acciones */}
      {/* <Button variant="contained" color="primary">Ver habitaciones</Button> */}
    </Box>
  </Paper>
);

export default ClienteHome;