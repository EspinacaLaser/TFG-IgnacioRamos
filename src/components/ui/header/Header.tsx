import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Logo from "./Logo";
import LoginButton from "./LoginButton";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import NavItem from "./NavItem";

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
    <AppBar position="static" color="secondary" elevation={3}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          minHeight: { xs: 64, md: 96 },
        }}
      >
        <Logo />
        <Box sx={{ flex: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
          <Navbar />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {user ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogout}
              sx={{ fontWeight: "bold" }}
            >
              Cerrar sesión
            </Button>
          ) : (
            <LoginButton />
          )}
        </Box>
        {/* Burger menu en móvil */}
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
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: { width: 240, bgcolor: "background.paper" },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Logo />
            <Divider />
            <List sx={{ mt: 1 }}>
              {navLinks.map(link => (
                <NavItem key={link.name} name={link.name} href={link.href} />
              ))}
            </List>
            <Divider sx={{ my: 1 }} />
            {user ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
                sx={{ fontWeight: "bold" }}
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