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
    <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "center", md: "flex-start" }, mb: { xs: 3, md: 0 } }}>
      <FooterContacto />
    </Box>
    <Box sx={{ flex: 1, display: "flex", justifyContent: "center", mb: { xs: 3, md: 0 } }}>
      <FooterMapa />
    </Box>
    <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
      <FooterLogo />
    </Box>
  </Box>
);

export default FooterMain;