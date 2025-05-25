import React, { useState } from "react";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useAuth } from "../../context/AuthContext"; // Importa el contexto

interface LoginFormProps {
  tipo: "cliente" | "personal";
  subrol: "recepcionista" | "admin";
}

const LoginForm: React.FC<LoginFormProps> = ({ tipo, subrol }) => {
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Usa el contexto

  /**
   * Envía los datos del formulario al endpoint correspondiente según el rol.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    let url = "";
    let body: any = {};

    if (tipo === "cliente") {
      url = "http://localhost/hotel-api/login_cliente.php";
      body = { email, password };
    } else if (subrol === "recepcionista") {
      url = "http://localhost/hotel-api/login_recepcionista.php";
      body = { usuario, password };
    } else {
      url = "http://localhost/hotel-api/login_admin.php";
      body = { usuario, password };
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.success) {
        login(data.user); // Guarda el usuario en el contexto
        if (tipo === "cliente") navigate("/cliente/home");
        else if (subrol === "recepcionista") navigate("/recepcionista/home");
        else navigate("/admin/home");
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
      {/* Campo de email para clientes, usuario para personal */}
      {tipo === "cliente" ? (
        <InputField
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          name="email"
          required
        />
      ) : (
        <InputField
          type="text"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
          placeholder="Usuario"
          name="usuario"
          required
        />
      )}
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
        Iniciar sesión
      </Button>
      {/* Mensaje de error si existe */}
      <ErrorMessage message={error} />
      {/* Enlace a registro solo para clientes */}
      {tipo === "cliente" && (
        <Button
          type="button"
          color="secondary"
          onClick={() => navigate("/registro")}
          sx={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
        >
          ¿No tienes cuenta? Regístrate
        </Button>
      )}
    </Box>
  );
};

export default LoginForm;