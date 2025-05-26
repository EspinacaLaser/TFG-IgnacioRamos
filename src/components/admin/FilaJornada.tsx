import React from "react";
import { TableRow, TableCell, useTheme } from "@mui/material";

/**
 * Fila de la tabla que muestra los datos de una jornada.
 */
interface FilaJornadaProps {
  jornada: {
    recepcionista_id: number;
    nombre_completo: string;
    fecha: string;
    hora_entrada: string;
    hora_salida: string;
  };
}

const FilaJornada: React.FC<FilaJornadaProps> = ({ jornada }) => {
  const theme = useTheme();
  return (
    <TableRow
      hover
      sx={{
        "&:hover": { backgroundColor: theme.palette.action.hover },
        fontFamily: theme.typography.body2.fontFamily,
      }}
    >
      <TableCell>{jornada.recepcionista_id}</TableCell>
      <TableCell>{jornada.nombre_completo}</TableCell>
      <TableCell>{new Date(jornada.fecha).toLocaleDateString()}</TableCell>
      <TableCell>{jornada.hora_entrada}</TableCell>
      <TableCell>{jornada.hora_salida}</TableCell>
    </TableRow>
  );
};

export default FilaJornada;