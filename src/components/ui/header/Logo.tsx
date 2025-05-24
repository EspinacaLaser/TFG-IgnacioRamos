import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const Logo = () => (
  <Link to="/" style={{ display: "flex", alignItems: "center" }}>
    <Avatar
      src="/logoHotel.png"
      alt="Logo Hotel"
      sx={{
        width: { xs: 128, md: 130 },
        height: { xs: 128, md: 130 },
        mr: 2,
        borderRadius: 2,
      }}
    />
  </Link>
);

export default Logo;