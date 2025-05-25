import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PrefijoTelefonoSelect from "./PrefijoTelefonoSelect";
import BotonPasarelaPago from "./BotonPasarelaPago";

/**
 * Props del formulario de datos personales.
 */
interface ReservaDatosPersonalesFormProps {
  datos: { nombre: string; email: string; telefono: string; prefijo: string };
  onDatosChange: (datos: { nombre: string; email: string; telefono: string; prefijo: string }) => void;
  fechas: { entrada: string; salida: string };
  noches: number;
  total: number;
  habitacion_id: number; // <-- Añadido aquí
}

// Expresión regular para validar email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Formulario de datos personales del cliente.
 */
const ReservaDatosPersonalesForm: React.FC<ReservaDatosPersonalesFormProps> = ({
  datos,
  onDatosChange,
  fechas,
  noches,
  total,
  habitacion_id, // <-- Recibe aquí
}) => {
  // Estado para controlar si los campos han sido tocados (para mostrar errores solo después de interactuar)
  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});

  // Validaciones de email y teléfono
  // Validaciones de email y teléfono (asegura booleanos)
const emailError = !!(datos.email && !emailRegex.test(datos.email));
const telefonoError = !!(datos.telefono && !/^\d+$/.test(datos.telefono));

// El botón de pagar solo se habilita si todos los campos son válidos y están completos
const isDisabled =
  !datos.nombre ||
  !habitacion_id ||
  !datos.email ||
  !datos.telefono ||
  !datos.prefijo ||
  emailError ||
  telefonoError;

  // Marca un campo como tocado al perder el foco
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
        disabled={isDisabled}
        habitacion_id={habitacion_id} // <-- Usa la prop aquí
      />
    </Box>
  );
};

export default ReservaDatosPersonalesForm;