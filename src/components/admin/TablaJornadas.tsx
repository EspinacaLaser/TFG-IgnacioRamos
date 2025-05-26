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
import FilaJornada from "./FilaJornada";

/**
 * Tabla que muestra las jornadas de los recepcionistas.
 */
interface TablaJornadasProps {
    jornadas: {
        recepcionista_id: number;
        nombre_completo: string;
        fecha: string;
        hora_entrada: string;
        hora_salida: string;
    }[];
}

const TablaJornadas: React.FC<TablaJornadasProps> = ({ jornadas }) => {
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
            <Table size="small" aria-label="tabla de jornadas">
                <TableHead>
                    <TableRow sx={{ backgroundColor: theme.palette.secondary.main }}>
                        <TableCell sx={{ fontWeight: 700, color: theme.palette.secondary.contrastText, fontFamily: theme.typography.h6.fontFamily }}>ID</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: theme.palette.secondary.contrastText, fontFamily: theme.typography.h6.fontFamily }}>Recepcionista</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: theme.palette.secondary.contrastText, fontFamily: theme.typography.h6.fontFamily }}>Fecha</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: theme.palette.secondary.contrastText, fontFamily: theme.typography.h6.fontFamily }}>Hora entrada</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: theme.palette.secondary.contrastText, fontFamily: theme.typography.h6.fontFamily }}>Hora salida</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {jornadas.map((jornada, idx) => (
                        <FilaJornada key={idx} jornada={jornada} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TablaJornadas;