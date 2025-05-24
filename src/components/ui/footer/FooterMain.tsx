/**
 * FooterMain: zona superior del footer.
 * Incluye el logo, el mapa de ubicación y la información de contacto/redes sociales.
 * Usa el color secundario del tema y adapta el layout según el tamaño de pantalla.
 */
import FooterLogo from './FooterLogo';
import FooterMapa from './FooterMapa';
import FooterContacto from './FooterContacto';
import Box from "@mui/material/Box";

const FooterMain = () => (
  <Box
    sx={{
      bgcolor: "secondary.main",
      color: "secondary.contrastText",
      py: 6,
      px: { xs: 2, md: 6 },
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-between",
      alignItems: "center",
      gap: 4,
    }}
  >
    <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
      <FooterLogo />
    </Box>
    <Box sx={{ flex: 1, display: "flex", justifyContent: "center", mb: { xs: 3, md: 0 } }}>
      <FooterMapa />
    </Box>
    <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "center", md: "flex-end" }, mb: { xs: 3, md: 0 } }}>
      <FooterContacto />
    </Box>
  </Box>
);

export default FooterMain;