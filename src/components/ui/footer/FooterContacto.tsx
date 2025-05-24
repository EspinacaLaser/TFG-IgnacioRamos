import SocialLinks from './SocialLinks';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled, useTheme } from "@mui/material/styles";

// Link animado para el teléfono
const AnimatedLink = styled(Link)(({ theme }) => ({
  position: "relative",
  color: "inherit",
  fontWeight: "bold",
  textDecoration: "none",
  transition: "color 0.2s",
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
  "&:hover:after, &:focus:after": {
    left: 0,
    width: "100%",
    transform: "none",
  },
}));

const FooterContacto = () => (
  <Box>
    <Typography fontWeight="bold" mb={1}>
      Teléfono:{" "}
      <AnimatedLink href="tel:+34123456789">
        +34 123 456 789
      </AnimatedLink>
    </Typography>
    <SocialLinks />
  </Box>
);

export default FooterContacto;