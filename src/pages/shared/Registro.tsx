import React, { useState } from "react";
import InputField from "../../components/login/InputField";
import ErrorMessage from "../../components/login/ErrorMessage";
import { useNavigate } from "react-router-dom";

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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Registro de Cliente</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          placeholder="Email"
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
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Registrarse
        </button>
        {/* Mensaje de error */}
        <ErrorMessage message={error} />
        {/* Mensaje de éxito */}
        {success && <div className="text-green-600">{success}</div>}
      </form>
    </div>
  );
};

export default Registro;