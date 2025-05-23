import Button from "@mui/material/Button";

interface BotonReservarProps {
  onClick: () => void;
  disabled?: boolean;
}

const BotonReservar: React.FC<BotonReservarProps> = ({ onClick, disabled }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    disabled={disabled}
    sx={{ fontWeight: "bold" }}
  >
    Reservar
  </Button>
);

export default BotonReservar;