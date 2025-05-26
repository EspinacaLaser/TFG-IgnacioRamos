import React, { useState } from "react";
import { Paper, Typography, Button, Box, useTheme } from "@mui/material";
import HabitacionDatosBasicos from "./HabitacionDatosBasicos";
import HabitacionDescripcion from "./HabitacionDescripcion";
import HabitacionImagenes from "./HabitacionImagenes";
import BotonCrearHabitacion from "./BotonCrearHabitacion";

/**
 * Formulario principal para crear una nueva habitación.
 * Divide el formulario en componentes reutilizables y aplica el theme global.
 */
const CrearHabitacionForm: React.FC = () => {
    const theme = useTheme();
    // Estado para los datos básicos de la habitación
    const [datos, setDatos] = useState({
        numero: "",
        estado: "disponible",
        capacidad: "",
        precio_base: "",
    });
    // Estado para la descripción
    const [descripcion, setDescripcion] = useState("");
    // Estado para las imágenes (array de URLs)
    const [imagenes, setImagenes] = useState<string[]>([]);
    // Estado para mensajes de error y éxito
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    /**
     * Envía el formulario al endpoint PHP.
     * Realiza validaciones antes de enviar.
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        // Validaciones básicas
        if (!datos.numero.trim() || !datos.capacidad || !datos.precio_base) {
            setError("Rellena todos los campos obligatorios.");
            return;
        }
        if (Number(datos.capacidad) <= 0 || Number(datos.precio_base) <= 0) {
            setError("Capacidad y precio base deben ser mayores que 0.");
            return;
        }
        // Llamada al endpoint
        const res = await fetch("http://localhost/hotel-api/crear_habitacion.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...datos,
                capacidad: Number(datos.capacidad),
                precio_base: Number(datos.precio_base),
                descripcion,
                imagenes,
            }),
        });
        const data = await res.json();
        if (data.success) {
            setSuccess("Habitación creada correctamente.");
            setDatos({ numero: "", estado: "disponible", capacidad: "", precio_base: "" });
            setDescripcion("");
            setImagenes([]);
        } else {
            setError(data.error || "Error al crear la habitación.");
        }
    };

    return (
        <Paper
            elevation={0}
            sx={{
                p: { xs: 2, sm: 4 },
                borderRadius: 3,
                backgroundColor: "background.default",
                maxWidth: 600,
                margin: "0 auto",
                mt: { xs: 2, sm: 4 },
            }}
        >
            {/* Título del formulario */}
            <Typography
                variant="h5"
                sx={{
                    fontFamily: theme.typography.h5.fontFamily,
                    color: theme.palette.primary.main,
                    mb: 2,
                    fontWeight: 700,
                }}
            >
                Nueva habitación
            </Typography>
            {/* Formulario dividido en componentes reutilizables */}
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                {/* Datos básicos: número, estado, capacidad, precio */}
                <HabitacionDatosBasicos datos={datos} setDatos={setDatos} />
                {/* Descripción de la habitación */}
                <HabitacionDescripcion descripcion={descripcion} setDescripcion={setDescripcion} />
                {/* Imágenes de la habitación */}
                <HabitacionImagenes imagenes={imagenes} setImagenes={setImagenes} />
                {/* Mensajes de error y éxito */}
                {error && (
                    <Typography color="error" sx={{ fontFamily: theme.typography.body2.fontFamily }}>
                        {error}
                    </Typography>
                )}
                {success && (
                    <Typography color="success.main" sx={{ fontFamily: theme.typography.body2.fontFamily }}>
                        {success}
                    </Typography>
                )}
                {/* Botón de envío*/}
                <BotonCrearHabitacion disabled={!!error} loading={false} />
            </Box>
        </Paper>
    );
};

export default CrearHabitacionForm;