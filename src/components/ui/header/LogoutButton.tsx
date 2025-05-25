/**
 * Botón reutilizable para cerrar sesión.
 * Usa la lógica de logout del contexto y redirige al login.
 */
import React from "react";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Button
      variant="outlined"
      color="inherit"
      startIcon={<LogoutIcon />}
      onClick={handleLogout}
      sx={{
        fontWeight: "bold",
        borderColor: "#fff",
        color: "#fff",
        fontFamily: "'Montserrat', Arial, sans-serif",
        px: 2,
        py: 1,
        borderRadius: 2,
        "&:hover": {
          background: "rgba(255,255,255,0.08)",
        },
      }}
    >
      Cerrar sesión
    </Button>
  );
};

export default LogoutButton;