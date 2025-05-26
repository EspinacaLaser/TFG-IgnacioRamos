import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
} from "@mui/material";
import FilaCliente from "./FilaCliente";

/**
 * TablaClientes
 * Componente que muestra los datos de los clientes en una tabla responsiva y estilizada con el theme.
 * Recibe un array de clientes por props.
 */
interface TablaClientesProps {
  clientes: {
    id: number;
    nombre: string;
    email: string; // Cambiado de 'correo' a 'email' para coincidir con la BDD
    telefono: string;
    fecha_registro: string;
  }[];
}

const TablaClientes: React.FC<TablaClientesProps> = ({ clientes }) => {
  const theme = useTheme();

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 3,
        backgroundColor: theme.palette.background.paper,
        boxShadow: 2,
        maxWidth: "100%",
        overflowX: "auto",
      }}
    >
      <Table size="small" aria-label="tabla de clientes">
        <TableHead>
          <TableRow sx={{ backgroundColor: theme.palette.secondary.main }}>
            <TableCell
              sx={{
                fontWeight: 700,
                color: theme.palette.secondary.contrastText,
                fontFamily: theme.typography.h6.fontFamily,
              }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: theme.palette.secondary.contrastText,
                fontFamily: theme.typography.h6.fontFamily,
              }}
            >
              Nombre
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: theme.palette.secondary.contrastText,
                fontFamily: theme.typography.h6.fontFamily,
              }}
            >
              Email
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: theme.palette.secondary.contrastText,
                fontFamily: theme.typography.h6.fontFamily,
              }}
            >
              Teléfono
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: theme.palette.secondary.contrastText,
                fontFamily: theme.typography.h6.fontFamily,
              }}
            >
              Fecha registro
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Renderiza una fila por cada cliente usando el componente FilaCliente */}
          {clientes.map((cliente) => (
            <FilaCliente key={cliente.id} cliente={cliente} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaClientes;