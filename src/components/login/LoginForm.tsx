import React, { useState } from "react";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";

/**
 * Formulario de login reutilizable.
 * Recibe el tipo de usuario y subrol para decidir a qué endpoint llamar.
 */
interface LoginFormProps {
  tipo: "cliente" | "personal";
  subrol: "recepcionista" | "admin";
}

const LoginForm: React.FC<LoginFormProps> = ({ tipo, subrol }) => {
  // Estado para los campos del formulario
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  // Estado para mostrar errores
  const [error, setError] = useState("");
  const navigate = useNavigate();

  /**
   * Maneja el envío del formulario de login.
   * Llama al endpoint correspondiente según el rol seleccionado.
   * Si el login es exitoso, guarda el usuario en localStorage y redirige.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    let url = "";
    let body: any = {};

    // Selecciona el endpoint y los datos según el tipo de usuario
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
      // Realiza la petición al backend
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.success) {
        // Guarda el usuario autenticado en localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        // Redirige según el rol
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Campo de email para clientes, usuario para personal */}
      {tipo === "cliente" ? (
        <InputField
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
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
      {/* Campo de contraseña */}
      <InputField
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Contraseña"
        name="password"
        required
      />
      {/* Botón para enviar el formulario */}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Iniciar sesión
      </button>
      {/* Mensaje de error si lo hay */}
      <ErrorMessage message={error} />
      {/* Solo para clientes: botón para ir a registro */}
      {tipo === "cliente" && (
        <button
          type="button"
          className="text-blue-600 underline"
          onClick={() => navigate("/registro")}
        >
          ¿No tienes cuenta? Regístrate
        </button>
      )}
    </form>
  );
};

export default LoginForm;