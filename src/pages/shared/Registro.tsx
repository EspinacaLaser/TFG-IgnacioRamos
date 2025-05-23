import React from "react";
import RegistroForm from "../../components/login/RegistroForm";
import RegistroCard from "../../components/login/RegistroCard";
import Typography from "@mui/material/Typography";

const Registro: React.FC = () => (
  <RegistroCard>
    <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
      Registro de Cliente
    </Typography>
    <RegistroForm />
  </RegistroCard>
);

export default Registro;