import NavItem from "./NavItem";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

const navLinks = [
  { name: "Inicio", href: "/cliente/home" },
  { name: "Reservas", href: "/cliente/reservas" },
  { name: "Facturas", href: "/cliente/facturas" },
  { name: "Perfil", href: "/cliente/perfil" },
];

const Navbar = () => (
  <Box component="nav">
    <List sx={{ display: "flex", gap: 2, p: 0 }}>
      {navLinks.map(link => (
        <NavItem key={link.name} name={link.name} href={link.href} />
      ))}
    </List>
  </Box>
);

export default Navbar;