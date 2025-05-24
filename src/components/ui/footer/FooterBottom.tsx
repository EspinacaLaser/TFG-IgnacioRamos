import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Copyright from './Copyright';
import { styled, useTheme } from "@mui/material/styles";

// Link animado con subrayado desde el centro
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
    background: theme.palette.secondary.main,
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
    transform: "translateX(-50%)",
  },
  "&:hover:after, &:focus:after": {
    left: 0,
    width: "100%",
    transform: "none",
  },
}));

const FooterBottom = () => (
  <Box
    sx={{
      bgcolor: "primary.main",
      color: "primary.contrastText",
      py: 2,
      px: 2,
      textAlign: "center",
      borderTop: "2px solid",
      borderColor: "secondary.main",
    }}
  >
    <Box sx={{ mb: 1, display: "flex", justifyContent: "center", gap: 3 }}>
      <AnimatedLink href="/cookies" underline="none">
        Cookies
      </AnimatedLink>
      <AnimatedLink href="/privacidad" underline="none">
        Política de Privacidad
      </AnimatedLink>
      <AnimatedLink href="/atencion-cliente" underline="none">
        Atención al Cliente
      </AnimatedLink>
    </Box>
    <Copyright />
  </Box>
);

export default FooterBottom;