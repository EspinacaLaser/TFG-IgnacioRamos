import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";

/**
 * Obtiene los dos últimos dígitos del año actual (por ejemplo, 25 para 2025).
 */
const currentYear = new Date().getFullYear() % 100;

/**
 * Formatea el número de tarjeta en bloques de 4 dígitos separados por espacio.
 * Solo permite hasta 16 dígitos.
 */
const formatCardNumber = (value: string) =>
  value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();

/**
 * Formulario ficticio de pago con validaciones:
 * - Número de tarjeta: 16 dígitos, agrupados en bloques de 4.
 * - Caducidad: formato MM/AA, mes válido y año no caducado.
 * - CVV: 3 dígitos, oculto.
 * Todos los campos solo aceptan números.
 */
const FormularioPagoFicticio: React.FC = () => {
  // Estado de los campos del formulario
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState<{ cardNumber?: string; expiry?: string; cvv?: string }>({});

  /**
   * Valida el número de tarjeta.
   * @returns Mensaje de error si no tiene 16 dígitos, si no, cadena vacía.
   */
  const validateCardNumber = (value: string) => {
    const digits = value.replace(/\s/g, "");
    if (digits.length !== 16) return "Debe tener 16 dígitos";
    return "";
  };

  /**
   * Valida la fecha de caducidad.
   * - Formato MM/AA.
   * - Mes entre 1 y 12.
   * - Año igual o mayor al actual.
   * - Si es el año actual, el mes debe ser igual o mayor al actual.
   * @returns Mensaje de error si no es válida, si no, cadena vacía.
   */
  const validateExpiry = (value: string) => {
    if (!/^\d{2}\/\d{2}$/.test(value)) return "Formato MM/AA";
    const [mes, anio] = value.split("/").map(Number);
    if (mes < 1 || mes > 12) return "Mes inválido";
    if (anio < currentYear) return "Tarjeta caducada";
    if (anio === currentYear) {
      const mesActual = new Date().getMonth() + 1;
      if (mes < mesActual) return "Tarjeta caducada";
    }
    return "";
  };

  /**
   * Valida el CVV.
   * @returns Mensaje de error si no tiene 3 dígitos, si no, cadena vacía.
   */
  const validateCvv = (value: string) => {
    if (!/^\d{3}$/.test(value)) return "CVV inválido";
    return "";
  };

  /**
   * Handler para el cambio en el número de tarjeta.
   * Formatea automáticamente el número en bloques de 4.
   */
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
    setErrors((prev) => ({ ...prev, cardNumber: "" }));
  };

  /**
   * Handler para el cambio en la fecha de caducidad.
   * Solo permite números y añade la barra automáticamente.
   */
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    setExpiry(value);
    setErrors((prev) => ({ ...prev, expiry: "" }));
  };

  /**
   * Handler para el cambio en el CVV.
   * Solo permite 3 dígitos numéricos.
   */
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvv(value);
    setErrors((prev) => ({ ...prev, cvv: "" }));
  };

  /**
   * Valida todos los campos al perder el foco.
   * Actualiza el estado de errores.
   */
  const handleBlur = () => {
    setErrors({
      cardNumber: validateCardNumber(cardNumber),
      expiry: validateExpiry(expiry),
      cvv: validateCvv(cvv),
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        Datos de la tarjeta (simulados)
      </Typography>
      <TextField
        label="Número de tarjeta"
        value={cardNumber}
        onChange={handleCardNumberChange}
        onBlur={handleBlur}
        error={!!errors.cardNumber}
        helperText={errors.cardNumber}
        inputProps={{ maxLength: 19, inputMode: "numeric", pattern: "[0-9 ]*" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreditCardIcon />
            </InputAdornment>
          ),
        }}
        placeholder="1234 5678 9012 3456"
        required
      />
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          label="Caducidad"
          value={expiry}
          onChange={handleExpiryChange}
          onBlur={handleBlur}
          error={!!errors.expiry}
          helperText={errors.expiry}
          inputProps={{ maxLength: 5, inputMode: "numeric", pattern: "[0-9/]*" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarMonthIcon />
              </InputAdornment>
            ),
          }}
          placeholder="MM/AA"
          required
        />
        <TextField
          label="CVV"
          value={cvv}
          onChange={handleCvvChange}
          onBlur={handleBlur}
          error={!!errors.cvv}
          helperText={errors.cvv}
          inputProps={{ maxLength: 3, inputMode: "numeric", pattern: "[0-9]*" }}
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
          placeholder="123"
          required
        />
      </Box>
    </Box>
  );
};

export default FormularioPagoFicticio;