/**
 * Permite seleccionar extras de la reserva (bufet desayuno y plaza de garaje).
 * Llama a onExtrasChange cuando cambian los valores.
 */
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface ReservaExtrasSelectorProps {
  extras: { bufet: boolean; parking: boolean };
  onExtrasChange: (extras: { bufet: boolean; parking: boolean }) => void;
}

/**
 * Componente para seleccionar los extras de la reserva.
 * - Permite activar/desactivar bufet y parking.
 * - Llama a onExtrasChange con el nuevo estado.
 */
const ReservaExtrasSelector: React.FC<ReservaExtrasSelectorProps> = ({ extras, onExtrasChange }) => {
  // Maneja el cambio de los checkboxes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onExtrasChange({
      ...extras,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%" }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={extras.bufet}
            onChange={handleChange}
            name="bufet"
            color="primary"
          />
        }
        label="Bufet de desayuno en cafetería (+8€)"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={extras.parking}
            onChange={handleChange}
            name="parking"
            color="primary"
          />
        }
        label="Plaza de garaje (+12€)"
      />
    </Box>
  );
};

export default ReservaExtrasSelector;