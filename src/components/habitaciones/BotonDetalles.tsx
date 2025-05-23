import Button from "@mui/material/Button";

interface BotonDetallesProps {
  onClick: () => void;
}

const BotonDetalles: React.FC<BotonDetallesProps> = ({ onClick }) => (
  <Button
    variant="outlined"
    color="primary"
    onClick={onClick}
    sx={{ fontWeight: "bold" }}
  >
    Detalles
  </Button>
);

export default BotonDetalles;