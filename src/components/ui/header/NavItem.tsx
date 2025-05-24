import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";

type Props = { name: string; href: string; drawer?: boolean };

const BURDEOS = "#800020";
const MARRON_CLARO = "#6d4c2f";

const AnimatedNavLink = styled(NavLink)<{ $color: string; $underline: string; $hover: string }>(({ $color, $underline, $hover }) => ({
  position: "relative",
  color: $color,
  textDecoration: "none",
  fontWeight: "bold",
  padding: "8px 16px",
  transition: "color 0.2s",
  "&:after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: 0,
    width: 0,
    height: 2,
    background: $underline,
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
    transform: "translateX(-50%)",
  },
  "&:hover": {
    color: $hover,
    background: "transparent",
  },
  "&:hover:after, &.active:after": {
    left: "0%",
    width: "100%",
    transform: "none",
  },
  "&.active": {
    color: $color,
    background: "transparent",
  },
}));

const NavItem = ({ name, href, drawer = false }: Props) => {
  const theme = useTheme();
  // Drawer: texto marrón oscuro, subrayado beige, hover igual
  // Navbar normal: texto marrón oscuro, subrayado burdeos, hover marrón claro
  const color = theme.palette.primary.main;
  const underline = drawer ? theme.palette.secondary.main : BURDEOS;
  const hover = drawer ? theme.palette.primary.main : MARRON_CLARO;

  return (
    <ListItemButton
      component={AnimatedNavLink}
      to={href}
      $color={color}
      $underline={underline}
      $hover={hover}
      sx={{
        borderRadius: 2,
        px: 2,
        py: 1,
        bgcolor: "transparent",
        color,
        fontWeight: "bold",
        position: "relative",
        "&:hover": {
          bgcolor: "transparent",
        },
        "&.Mui-selected": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      disableTouchRipple
    >
      <ListItemText primary={name} />
    </ListItemButton>
  );
};

export default NavItem;