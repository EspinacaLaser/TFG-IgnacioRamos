/**
 * Formulario de registro reutilizable para clientes.
 * Gestiona el envío de datos y muestra errores si los hay.
 * Usa la fuente secundaria (Open Sans) para los campos y Montserrat para los botones.
 */
import React, { useState } from "react";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const RegistroForm: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState(""); // Nuevo estado para teléfono
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
        body: JSON.stringify({ nombre, email, telefono, password }), // Incluye teléfono
      });
      const data = await res.json();
      if (data.success) {
        // Login automático tras registro
        // Hacemos login real para obtener el cliente_id
        const loginRes = await fetch("http://localhost/hotel-api/login_cliente.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const loginData = await loginRes.json();
        if (loginData.success) {
          localStorage.setItem("user", JSON.stringify(loginData.user));
          navigate("/cliente/home");
        } else {
          setError("Registro correcto, pero error al iniciar sesión automáticamente.");
        }
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
        type="tel"
        value={telefono}
        onChange={e => setTelefono(e.target.value)}
        placeholder="Teléfono"
        name="telefono"
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
          fontFamily: "'Montserrat', Arial, sans-serif",
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
        sx={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
      >
        ¿Ya tienes cuenta? Inicia sesión
      </Button>
    </Box>
  );
};

export default RegistroForm;