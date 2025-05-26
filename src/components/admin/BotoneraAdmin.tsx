import React from "react";
import { Button, ButtonGroup, Box } from "@mui/material";

interface BotoneraAdminProps {
    vista: "crear" | "clientes" | "trabajadores";
    setVista: (vista: "crear" | "clientes" | "trabajadores") => void;
}

/**
 * Botonera para cambiar entre las vistas del panel de administración.
 */
const BotoneraAdmin: React.FC<BotoneraAdminProps> = ({ vista, setVista }) => (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <ButtonGroup variant="contained" color="primary">
            <Button
                onClick={() => setVista("crear")}
                variant={vista === "crear" ? "contained" : "outlined"}
            >
                Crear habitación
            </Button>
            <Button
                onClick={() => setVista("clientes")}
                variant={vista === "clientes" ? "contained" : "outlined"}
            >
                Ver clientes
            </Button>
            <Button
                onClick={() => setVista("trabajadores")}
                variant={vista === "trabajadores" ? "contained" : "outlined"}
            >
                Ver trabajadores
            </Button>
        </ButtonGroup>
    </Box>
);

export default BotoneraAdmin;