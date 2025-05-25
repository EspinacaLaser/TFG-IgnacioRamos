import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

/**
 * Loader/spinner para simular el proceso de pago.
 */
const LoaderPago: React.FC = () => (
  <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
    <CircularProgress />
  </Box>
);

export default LoaderPago;