import React, { useState } from "react";
import RoleSelector from "../../components/login/RoleSelector";
import LoginForm from "../../components/login/LoginForm";

/**
 * Página de login principal.
 * Gestiona el tipo de usuario y subrol, y muestra el formulario correspondiente.
 */
const Login: React.FC = () => {
  const [tipo, setTipo] = useState<"cliente" | "personal">("cliente");
  const [subrol, setSubrol] = useState<"recepcionista" | "admin">("recepcionista");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <RoleSelector tipo={tipo} setTipo={setTipo} subrol={subrol} setSubrol={setSubrol} />
      <LoginForm tipo={tipo} subrol={subrol} />
      <div className="bg-red-500 text-white p-4">
  ¡Tailwind funciona!
</div>
    </div>
    
    
  );
};

export default Login;
