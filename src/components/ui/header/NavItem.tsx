import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

type Props = { name: string; href: string };

const AnimatedNavLink = styled(NavLink)(({ theme }) => ({
  position: "relative",
  color: "inherit",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "8px 16px",
  "&:after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: 0,
    width: 0,
    height: 2,
    background: theme.palette.primary.main,
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
    transform: "translateX(-50%)",
  },
  "&:hover:after, &.active:after": {
    left: "0%",
    width: "100%",
    transform: "none",
  },
}));

const NavItem = ({ name, href }: Props) => (
  <ListItemButton
    component={AnimatedNavLink}
    to={href}
    sx={{
      borderRadius: 2,
      px: 2,
      py: 1,
      bgcolor: "transparent",
      color: "primary.contrastText",
      fontWeight: "bold",
      position: "relative",
      "&:hover": {
        bgcolor: "transparent",
      },
    }}
  >
    <ListItemText primary={name} />
  </ListItemButton>
);

export default NavItem;