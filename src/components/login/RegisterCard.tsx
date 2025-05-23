import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

/**
 * Componente reutilizable para encapsular el formulario de registro en una Card de MUI.
 * Centra el contenido horizontalmente y le da un aspecto moderno y profesional.
 */
interface RegistroCardProps {
  children: React.ReactNode;
}

const RegistroCard: React.FC<RegistroCardProps> = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      minHeight: "80vh",
      mt: 6,
    }}
  >
    <Card
      sx={{
        width: 400,
        p: 2,
        boxShadow: 6,
        borderRadius: 3,
        bgcolor: "background.paper",
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  </Box>
);

export default RegistroCard;