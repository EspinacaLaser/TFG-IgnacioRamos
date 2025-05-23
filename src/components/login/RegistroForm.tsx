import React, { useState } from "react";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

/**
 * Formulario de registro reutilizable para clientes.
 * Gestiona el envío de datos y muestra errores si los hay.
 */
const RegistroForm: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  /**
   * Envía los datos del formulario al endpoint de registro.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost/hotel-api/registro_cliente.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password }),
      });
      const data = await res.json();
      if (data.success) {
        // Login automático tras registro
        localStorage.setItem("user", JSON.stringify({ email, nombre, rol: "cliente" }));
        navigate("/cliente/home");
      } else {
        setError(data.error || "Error desconocido");
      }
    } catch {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <InputField
        type="text"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Nombre"
        name="nombre"
        required
      />
      <InputField
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Correo electrónico"
        name="email"
        required
      />
      <InputField
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Contraseña"
        name="password"
        required
      />
      {/* Botón de envío */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          fontWeight: "bold",
          letterSpacing: 1,
          fontSize: "1.1rem",
        }}
      >
        Registrarse
      </Button>
      {/* Mensaje de error si existe */}
      <ErrorMessage message={error} />
      {/* Enlace a login */}
      <Button
        type="button"
        color="secondary"
        onClick={() => navigate("/login")}
      >
        ¿Ya tienes cuenta? Inicia sesión
      </Button>
    </Box>
  );
};

export default RegistroForm;