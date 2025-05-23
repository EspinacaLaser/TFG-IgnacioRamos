import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AdminHeader: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar position="static" color="warning">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Panel Administración
        </Typography>
        {user && user.nombre_completo && (
          <Typography sx={{ mr: 2 }}>
            Hola, {user.nombre_completo}
          </Typography>
        )}
        <Button color="inherit" variant="outlined" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;