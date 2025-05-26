import React from "react";
import { TableRow, TableCell, useTheme } from "@mui/material";

interface FilaClienteProps {
  cliente: {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    fecha_registro: string;
  };
}

const FilaCliente: React.FC<FilaClienteProps> = ({ cliente }) => {
  const theme = useTheme();
  return (
    <TableRow
      hover
      sx={{
        "&:hover": { backgroundColor: theme.palette.action.hover },
        fontFamily: theme.typography.body2.fontFamily,
      }}
    >
      <TableCell>{cliente.id}</TableCell>
      <TableCell>{cliente.nombre}</TableCell>
      <TableCell>{cliente.email}</TableCell>
      <TableCell>{cliente.telefono}</TableCell>
      <TableCell>{new Date(cliente.fecha_registro).toLocaleDateString()}</TableCell>
    </TableRow>
  );
};

export default FilaCliente;