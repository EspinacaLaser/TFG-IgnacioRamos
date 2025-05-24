import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

const SocialLinks = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
      <IconButton
        component="a"
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        sx={{
          color: theme.palette.primary.main,
          transition: "color 0.2s",
          "&:hover": {
            color: theme.palette.primary.light || "#6d4c2f",
          },
        }}
      >
        <FacebookIcon fontSize="large" />
      </IconButton>
      <IconButton
        component="a"
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        sx={{
          color: theme.palette.primary.main,
          transition: "color 0.2s",
          "&:hover": {
            color: theme.palette.primary.light || "#6d4c2f",
          },
        }}
      >
        <TwitterIcon fontSize="large" />
      </IconButton>
      <IconButton
        component="a"
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        sx={{
          color: theme.palette.primary.main,
          transition: "color 0.2s",
          "&:hover": {
            color: theme.palette.primary.light || "#6d4c2f",
          },
        }}
      >
        <InstagramIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default SocialLinks;