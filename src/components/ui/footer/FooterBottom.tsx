import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Copyright from './Copyright';

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
      <Link href="/cookies" underline="hover" color="inherit" sx={{ fontWeight: "bold" }}>
        Cookies
      </Link>
      <Link href="/privacidad" underline="hover" color="inherit" sx={{ fontWeight: "bold" }}>
        Política de Privacidad
      </Link>
      <Link href="/atencion-cliente" underline="hover" color="inherit" sx={{ fontWeight: "bold" }}>
        Atención al Cliente
      </Link>
    </Box>
    <Copyright />
  </Box>
);

export default FooterBottom;