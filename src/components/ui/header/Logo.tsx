import { Link } from "react-router-dom";
import logo from "../../../assets/react.svg"; // Cambia por tu logo real

const Logo = () => (
  <Link to="/">
    <img src={logo} alt="Logo Hotel" className="h-12 w-auto rounded" />
  </Link>
);

export default Logo;