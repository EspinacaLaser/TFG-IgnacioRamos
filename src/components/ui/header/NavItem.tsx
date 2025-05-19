import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.css";

type Props = { name: string; href: string };

const NavItem = ({ name, href }: Props) => (
  <li>
    <NavLink
      to={href}
      className={({ isActive }) => isActive ? styles.active : ""}
    >
      {name}
    </NavLink>
  </li>
);

export default NavItem;