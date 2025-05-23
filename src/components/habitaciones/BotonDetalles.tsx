import Button from "@mui/material/Button";

interface BotonDetallesProps {
  onClick: () => void;
  disabled?: boolean;
}

const BotonDetalles: React.FC<BotonDetallesProps> = ({ onClick, disabled }) => (
  <Button
    variant="outlined"
    color="primary"
    onClick={onClick}
    disabled={disabled}
    sx={{ fontWeight: "bold" }}
  >
    Detalles
  </Button>
);

export default BotonDetalles;