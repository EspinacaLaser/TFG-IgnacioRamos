import React, { useState } from "react";
import RoleSelector from "../../components/login/RoleSelector";
import LoginForm from "../../components/login/LoginForm";
import Button from '@mui/material/Button';
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
      <Button variant="contained" color="primary">
        Botón MUI
      </Button>
    </div>


  );
};

export default Login;
