import { NavLink } from "react-router-dom";

type Props = { name: string; href: string };

const NavItem = ({ name, href }: Props) => (
  <li>
    <NavLink
      to={href}
      className={({ isActive }) =>
        `px-4 py-2 rounded transition font-medium
        ${isActive
          ? "bg-yellow-300 text-[#6d166a] shadow"
          : "text-white hover:bg-yellow-200 hover:text-[#6d166a]"}`
      }
    >
      {name}
    </NavLink>
  </li>
);

export default NavItem;