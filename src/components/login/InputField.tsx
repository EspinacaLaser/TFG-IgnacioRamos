import React from "react";
import TextField from "@mui/material/TextField";

/**
 * Componente reutilizable para campos de entrada de formularios.
 * Utiliza el componente TextField de MUI para mantener la coherencia visual.
 */
interface InputFieldProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  value,
  onChange,
  placeholder,
  name,
  required = false,
}) => (
  <TextField
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    name={name}
    required={required}
    fullWidth
    variant="outlined"
    margin="normal"
    autoComplete={type === "password" ? "current-password" : "on"}
  />
);

export default InputField;