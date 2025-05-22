import React, { useState } from "react";
import InputField from "../../components/login/InputField";
import ErrorMessage from "../../components/login/ErrorMessage";
import { useNavigate } from "react-router-dom";

const Registro: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const res = await fetch("http://localhost/hotel-api/registro_cliente.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password }),
    });
    const data = await res.json();
    if (data.success) {
      setSuccess("¡Registro exitoso! Ahora puedes iniciar sesión.");
      setTimeout(() => navigate("/login"), 1500);
    } else {
      setError(data.error || "Error desconocido");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Registro de Cliente</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" required />
        <InputField type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <InputField type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Registrarse</button>
        <ErrorMessage message={error} />
        {success && <div className="text-green-600">{success}</div>}
      </form>
    </div>
  );
};

export default Registro;