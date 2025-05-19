import NavItem from "./NavItem";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <nav className={styles.nav}>
    <ul>
      <NavItem name="Inicio" href="/cliente/home" />
      <NavItem name="Reservas" href="/cliente/reservas" />
      <NavItem name="Facturas" href="/cliente/facturas" />
      <NavItem name="Perfil" href="/cliente/perfil" />
    </ul>
  </nav>
);

export default Navbar;