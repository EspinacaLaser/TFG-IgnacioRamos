/**
 * Navbar: barra de navegación principal.
 * Recibe la prop 'drawer' para adaptar el layout y el estilo cuando se usa en el Drawer (menú hamburguesa).
 * Utiliza NavItem para cada enlace.
 * Los nav items están sincronizados con el Drawer.
 */
import NavItem from "./NavItem";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

// Enlaces de navegación principales (sincronizados con Drawer)
const navLinks = [
  { name: "Inicio", href: "/cliente/home" },
  { name: "Habitaciones", href: "/cliente/habitaciones" },
  { name: "Mis Reservas", href: "/cliente/reservas" },
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