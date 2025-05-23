import React, { useState } from "react";
import InputField from "../../components/login/InputField";
import ErrorMessage from "../../components/login/ErrorMessage";
import { useNavigate } from "react-router-dom";
import RegistroCard from "../../components/login/RegisterCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

/**
 * Página de registro de clientes.
 * Permite a un nuevo cliente crear una cuenta con nombre, email y contraseña.
 * Si el registro es exitoso, redirige automáticamente al login.
 */
const Registro: React.FC = () => {
  // Estado para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Estado para mensajes de error y éxito
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  /**
   * Maneja el envío del formulario de registro.
   * Llama al endpoint PHP y gestiona la respuesta.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // Llamada al endpoint de registro de cliente
    const res = await fetch("http://localhost/hotel-api/registro_cliente.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password }),
    });
    const data = await res.json();
    if (data.success) {
      setSuccess("¡Registro exitoso! Ahora puedes iniciar sesión.");
      // Redirige al login tras 1,5 segundos
      setTimeout(() => navigate("/login"), 1500);
    } else {
      setError(data.error || "Error desconocido");
    }
  };

  return (
    <RegistroCard>
      <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
        Registro de Cliente
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
      >
        {/* Campo para el nombre */}
        <InputField
          type="text"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          placeholder="Nombre"
          required
        />
        {/* Campo para el email */}
        <InputField
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
        />
        {/* Campo para la contraseña */}
        <InputField
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        {/* Botón para enviar el formulario */}
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
            fontWeight: "bold",
            letterSpacing: 1,
            fontSize: "1.1rem",
            fontFamily: "'Montserrat', Arial, sans-serif",
            "&:hover": {
              backgroundColor: "#115293",
            },
          }}
        >
          Registrarse
        </Button>
        {/* Botón para volver al inicio de sesión */}
        <Button
          type="button"
          color="secondary"
          onClick={() => navigate("/login")}
        >
          ¿Ya tienes cuenta? Inicia sesión
        </Button>
        {/* Mensaje de error */}
        <ErrorMessage message={error} />
        {/* Mensaje de éxito */}
        {success && (
          <Typography color="success.main" align="center" sx={{ mt: 1 }}>
            {success}
          </Typography>
        )}
      </Box>
    </RegistroCard>
  );
};

export default Registro;