import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import logo from "../../../assets/react.svg"; // Cambia por tu logo real

const Logo = () => (
  <Link to="/">
    <Avatar src={logo} alt="Logo Hotel" sx={{ width: 48, height: 48, mr: 2, borderRadius: 2 }} />
  </Link>
);

export default Logo;