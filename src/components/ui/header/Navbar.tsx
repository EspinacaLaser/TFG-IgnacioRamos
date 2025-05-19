import NavItem from "./NavItem";

const Navbar = () => (
  <nav>
    <ul className="flex gap-6 items-center text-lg">
      <NavItem name="Inicio" href="/cliente/home" />
      <NavItem name="Reservas" href="/cliente/reservas" />
      <NavItem name="Facturas" href="/cliente/facturas" />
      <NavItem name="Perfil" href="/cliente/perfil" />
    </ul>
  </nav>
);

export default Navbar;