import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PrefijoTelefonoSelect from "./PrefijoTelefonoSelect";
import BotonPasarelaPago from "./BotonPasarelaPago";

interface ReservaDatosPersonalesFormProps {
  datos: { nombre: string; email: string; telefono: string; prefijo: string };
  onDatosChange: (datos: { nombre: string; email: string; telefono: string; prefijo: string }) => void;
  fechas: { entrada: string; salida: string };
  noches: number;
  total: number;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ReservaDatosPersonalesForm: React.FC<ReservaDatosPersonalesFormProps> = ({
  datos,
  onDatosChange,
  fechas,
  noches,
  total,
}) => {
  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});

  const emailError = datos.email && !emailRegex.test(datos.email);
  const telefonoError = datos.telefono && !/^\d+$/.test(datos.telefono);

  const isDisabled =
    !datos.nombre ||
    !datos.email ||
    !datos.telefono ||
    !datos.prefijo ||
    emailError ||
    telefonoError;

  const handleBlur = (field: string) => setTouched({ ...touched, [field]: true });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Nombre"
        value={datos.nombre}
        onChange={e => onDatosChange({ ...datos, nombre: e.target.value })}
        onBlur={() => handleBlur("nombre")}
        fullWidth
        required
      />
      <TextField
        label="Correo electrónico"
        type="email"
        value={datos.email}
        onChange={e => onDatosChange({ ...datos, email: e.target.value })}
        onBlur={() => handleBlur("email")}
        error={Boolean(touched.email && emailError)}
        helperText={touched.email && emailError ? "Introduce un correo válido" : ""}
        fullWidth
        required
      />
      <Box sx={{ display: "flex", gap: 1 }}>
        <PrefijoTelefonoSelect
          value={datos.prefijo}
          onChange={prefijo => onDatosChange({ ...datos, prefijo })}
        />
        <TextField
          label="Teléfono"
          type="tel"
          value={datos.telefono}
          onChange={e => onDatosChange({ ...datos, telefono: e.target.value.replace(/\D/g, "") })}
          onBlur={() => handleBlur("telefono")}
          error={Boolean(touched.telefono && telefonoError)}
          helperText={touched.telefono && telefonoError ? "Solo números" : ""}
          fullWidth
          required
        />
      </Box>
      <BotonPasarelaPago
        datos={datos}
        fechas={fechas}
        noches={noches}
        total={total} 
        disabled={!!isDisabled}      />
    </Box>
  );
};

export default ReservaDatosPersonalesForm;