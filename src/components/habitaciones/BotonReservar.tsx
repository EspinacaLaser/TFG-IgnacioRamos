import Button from "@mui/material/Button";

interface BotonReservarProps {
  onClick: () => void;
}

const BotonReservar: React.FC<BotonReservarProps> = ({ onClick }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    sx={{ fontWeight: "bold" }}
  >
    Reservar
  </Button>
);

export default BotonReservar;