/**
 * Header principal de la aplicación.
 * Incluye el logo, barra de navegación, nombre de usuario, botón de cerrar sesión y menú hamburguesa.
 * Utiliza el tema global de MUI para colores y tipografía.
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Logo from "./Logo";
import LoginButton from "./LogoutButton";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import NavItem from "./NavItem";
import WelcomeUser from "./WelcomeUser";

// Enlaces de navegación principales
const navLinks = [
  { name: "Inicio", href: "/cliente/home" },
  { name: "Reservas", href: "/cliente/reservas" },
  { name: "Facturas", href: "/cliente/facturas" },
  { name: "Perfil", href: "/cliente/perfil" },
];

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static" color="secondary" elevation={2}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          minHeight: { xs: 64, md: 96 },
        }}
      >
        {/* Logo de la aplicación */}
        <Logo />
        {/* Navbar visible solo en escritorio */}
        <Box sx={{ flex: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
          <Navbar />
        </Box>
        {/* Nombre de usuario y botón de cerrar sesión en escritorio */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
          <WelcomeUser />
          {user ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogout}
              sx={{ fontWeight: "bold", fontFamily: "'Montserrat', Arial, sans-serif" }}
            >
              Cerrar sesión
            </Button>
          ) : (
            <LoginButton />
          )}
        </Box>
        {/* Menú hamburguesa visible solo en móvil */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setDrawerOpen(true)}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
        {/* Drawer para navegación en móvil */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          slotProps={{
            paper: { sx: { width: 240, bgcolor: "background.paper" } },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Logo />
            <Divider />
            <List sx={{ mt: 1 }}>
              {navLinks.map(link => (
                <NavItem key={link.name} name={link.name} href={link.href} drawer />
              ))}
            </List>
            <Divider sx={{ my: 1 }} />
            <WelcomeUser />
            {user ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
                sx={{ fontWeight: "bold", fontFamily: "'Montserrat', Arial, sans-serif", mt: 2 }}
              >
                Cerrar sesión
              </Button>
            ) : (
              <LoginButton />
            )}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;