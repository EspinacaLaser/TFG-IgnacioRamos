import React, { useState } from "react";
import RoleSelector from "../../components/login/RoleSelector";
import LoginForm from "../../components/login/LoginForm";
import LoginCard from "../../components/login/LoginCard";
import Typography from "@mui/material/Typography";

/**
 * Página de login principal.
 * Gestiona el tipo de usuario y subrol, y muestra el formulario correspondiente.
 */

const Login: React.FC = () => {
  const [tipo, setTipo] = useState<"cliente" | "personal">("cliente");
  const [subrol, setSubrol] = useState<"recepcionista" | "admin">("recepcionista");

  return (
    <LoginCard>
      <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
        Iniciar sesión
      </Typography>
      <RoleSelector tipo={tipo} setTipo={setTipo} subrol={subrol} setSubrol={setSubrol} />
      <LoginForm tipo={tipo} subrol={subrol} />
    </LoginCard>
  );
};

export default Login;