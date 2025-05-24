import NavItem from "./NavItem";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

const navLinks = [
  { name: "Inicio", href: "/cliente/home" },
  { name: "Habitaciones", href: "/cliente/habitaciones" },
  { name: "Reservas", href: "/cliente/reservas" },
  { name: "Facturas", href: "/cliente/facturas" },
  { name: "Perfil", href: "/cliente/perfil" },
];

const Navbar = ({ drawer = false }: { drawer?: boolean }) => (
  <Box component="nav">
    <List sx={{ display: "flex", gap: 2, p: 0, flexDirection: drawer ? "column" : "row" }}>
      {navLinks.map(link => (
        <NavItem key={link.name} name={link.name} href={link.href} drawer={drawer} />
      ))}
    </List>
  </Box>
);

export default Navbar;