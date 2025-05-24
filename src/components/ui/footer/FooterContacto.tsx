import SocialLinks from './SocialLinks';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const FooterContacto = () => (
  <Box>
    <Typography fontWeight="bold" mb={1}>
      Teléfono:{" "}
      <Link href="tel:+34123456789" underline="hover" color="inherit">
        +34 123 456 789
      </Link>
    </Typography>
    <SocialLinks />
  </Box>
);

export default FooterContacto;