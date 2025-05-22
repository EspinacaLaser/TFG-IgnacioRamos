import React from "react";

/**
 * Componente reutilizable para campos de entrada (input).
 * Permite personalizar tipo, valor, placeholder, etc.
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
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    name={name}
    required={required}
    className="border p-2 rounded w-full"
    autoComplete={type === "password" ? "current-password" : "on"}
  />
);

export default InputField;