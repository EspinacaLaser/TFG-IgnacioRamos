import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/**
 * Selector de rol para el login.
 * Permite elegir entre cliente y personal autorizado, y dentro de personal, entre recepcionista y administrador.
 * El botón activo se resalta con color "primary" y el resto con "inherit".
 */
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
      sx={{ mb: 2, letterSpacing: 1 }}
    >
      Identificación de rol
    </Typography>
    {/* Selector principal: Cliente o Personal */}
    <Box display="flex" justifyContent="center" mb={tipo === "personal" ? 2 : 0}>
      <Button
        variant={tipo === "cliente" ? "contained" : "outlined"}
        color={tipo === "cliente" ? "primary" : "inherit"}
        onClick={() => setTipo("cliente")}
        sx={{
          px: 2.5,
          py: 0.7,
          mx: 1,
          borderRadius: 2,
          fontWeight: "bold",
          fontSize: "1rem",
          minWidth: 120,
        }}
      >
        Cliente
      </Button>
      <Button
        variant={tipo === "personal" ? "contained" : "outlined"}
        color={tipo === "personal" ? "primary" : "inherit"}
        onClick={() => setTipo("personal")}
        sx={{
          px: 2.5,
          py: 0.7,
          mx: 1,
          borderRadius: 2,
          fontWeight: "bold",
          fontSize: "1rem",
          minWidth: 120,
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
          }}
        >
          Administrador
        </Button>
      </Box>
    )}
  </Box>
);

export default RoleSelector;