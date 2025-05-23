import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import logo from "../../../assets/react.svg"; // Cambia por tu logo real
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar position="static" color="secondary" elevation={3}>
      <Toolbar>
        <Avatar src={logo} alt="Logo Hotel" sx={{ width: 48, height: 48, mr: 2 }} />
        <Typography variant="h5" sx={{ fontWeight: "bold", flexGrow: 1 }}>
          Hotel Gestión
        </Typography>
        {user && (user.nombre || user.nombre_completo) && (
          <Typography sx={{ mr: 2 }}>
            Hola, {user.nombre || user.nombre_completo}
          </Typography>
        )}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Navbar />
          {/* Solo muestra el botón de cerrar sesión si hay usuario logueado */}
          {user && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogout}
              sx={{ fontWeight: "bold" }}
            >
              Cerrar sesión
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;