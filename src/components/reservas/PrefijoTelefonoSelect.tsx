import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

interface PrefijoTelefonoSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const PrefijoTelefonoSelect: React.FC<PrefijoTelefonoSelectProps> = ({ value, onChange }) => {
  const [prefijos, setPrefijos] = useState<{ codigo: string; pais: string }[]>([]);

  useEffect(() => {
    fetch("http://localhost/hotel-api/prefijos_paises.php")
      .then(res => res.json())
      .then(data => {
        setPrefijos(data);
        // Selecciona el primer prefijo si no hay ninguno seleccionado
        if (data.length > 0 && !value) {
          onChange(data[0].codigo);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TextField
      select
      label="Prefijo"
      value={value}
      onChange={e => onChange(e.target.value)}
      sx={{ minWidth: 100 }}
    >
      {prefijos.map((p) => (
        <MenuItem key={p.codigo} value={p.codigo}>
          {p.codigo} ({p.pais})
        </MenuItem>
      ))}
    </TextField>
  );
};

export default PrefijoTelefonoSelect;