/**
 * Hero reutilizable para cualquier página.
 * Recibe título y subtítulo como props y los muestra centrados.
 * Usa Montserrat para el título y Open Sans para el subtítulo.
 */
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface HeroProps {
  title: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => (
  <Box sx={{ textAlign: "center", mt: 4, mb: 6 }}>
    <Typography
      variant="h2"
      fontWeight={800}
      sx={{
        fontFamily: "'Montserrat', Arial, sans-serif",
        letterSpacing: 1,
        mb: 1,
      }}
    >
      {title}
    </Typography>
    {subtitle && (
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "'Open Sans', Arial, sans-serif",
          color: "#6d4c2f",
          fontSize: "1.3rem",
        }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default Hero;