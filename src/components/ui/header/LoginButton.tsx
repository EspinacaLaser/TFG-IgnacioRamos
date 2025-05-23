import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const LoginButton = () => (
  <Button
    component={Link}
    to="/login"
    variant="contained"
    color="primary"
    sx={{
      fontWeight: "bold",
      borderRadius: 2,
      px: 3,
      py: 1,
      ml: 2,
      fontFamily: "'Montserrat', Arial, sans-serif",
    }}
  >
    Login
  </Button>
);

export default LoginButton;