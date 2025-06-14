/**
 * Selector de rol para el login.
 * Permite elegir entre cliente y personal autorizado, y dentro de personal, entre recepcionista y administrador.
 * Los botones usan la fuente Montserrat (por defecto en el theme) y resaltan el rol activo.
 */
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface RoleSelectorProps {
  tipo: "cliente" | "personal";
  setTipo: (tipo: "cliente" | "personal") => void;
  subrol: "recepcionista" | "admin";
  setSubrol: (subrol: "recepcionista" | "admin") => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({
  tipo,
  setTipo,
  subrol,
  setSubrol,
}) => (
  <Box mb={3}>
    {/* Título de identificación de rol */}
    <Typography
      variant="subtitle1"
      align="center"
      fontWeight="bold"
      sx={{ mb: 2, letterSpacing: 1, fontFamily: "'Montserrat', Arial, sans-serif" }}
    >
      Identificación de rol
    </Typography>
    {/* Selector principal: Cliente o Personal */}
    <Box display="flex" justifyContent="center" mb={tipo === "personal" ? 2 : 0}>
      <Button
        variant={tipo === "cliente" ? "contained" : "outlined"}
        color="primary"
        onClick={() => setTipo("cliente")}
        sx={{
          px: 2.5,
          py: 0.7,
          mx: 1,
          borderRadius: 2,
          fontWeight: "bold",
          fontSize: "1rem",
          minWidth: 120,
          fontFamily: "'Montserrat', Arial, sans-serif",
        }}
      >
        Cliente
      </Button>
      <Button
        variant={tipo === "personal" ? "contained" : "outlined"}
        color="primary"
        onClick={() => setTipo("personal")}
        sx={{
          px: 2.5,
          py: 0.7,
          mx: 1,
          borderRadius: 2,
          fontWeight: "bold",
          fontSize: "1rem",
          minWidth: 120,
          fontFamily: "'Montserrat', Arial, sans-serif",
        }}
      >
        Personal
      </Button>
    </Box>
    {/* Selector secundario: Recepcionista o Administrador */}
    {tipo === "personal" && (
      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          variant={subrol === "recepcionista" ? "contained" : "outlined"}
          color={subrol === "recepcionista" ? "primary" : "inherit"}
          onClick={() => setSubrol("recepcionista")}
          sx={{
            px: 2,
            py: 0.6,
            mx: 1,
            borderRadius: 2,
            fontWeight: "bold",
            fontSize: "0.97rem",
            minWidth: 140,
            fontFamily: "'Montserrat', Arial, sans-serif",
          }}
        >
          Recepcionista
        </Button>
        <Button
          variant={subrol === "admin" ? "contained" : "outlined"}
          color={subrol === "admin" ? "primary" : "inherit"}
          onClick={() => setSubrol("admin")}
          sx={{
            px: 2,
            py: 0.6,
            mx: 1,
            borderRadius: 2,
            fontWeight: "bold",
            fontSize: "0.97rem",
            minWidth: 140,
            fontFamily: "'Montserrat', Arial, sans-serif",
          }}
        >
          Administrador
        </Button>
      </Box>
    )}
  </Box>
);

export default RoleSelector;