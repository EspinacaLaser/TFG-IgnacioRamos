import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

type Props = { name: string; href: string };

const NavItem = ({ name, href }: Props) => (
  <ListItemButton
    component={NavLink}
    to={href}
    sx={{
      borderRadius: 2,
      px: 2,
      py: 1,
      color: "white",
      fontWeight: "bold",
      "&.active": {
        bgcolor: "yellow.300",
        color: "#6d166a",
      },
      "&:hover": {
        bgcolor: "yellow.200",
        color: "#6d166a",
      },
    }}
  >
    <ListItemText primary={name} />
  </ListItemButton>
);

export default NavItem;