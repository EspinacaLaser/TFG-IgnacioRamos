import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "./context/AuthContext";

// -----------------------------------------------------------------------------
// CONFIGURACIÓN DEL TEMA DE MUI (Material UI) PARA TIPOGRAFÍAS Y COLORES GLOBALES
// -----------------------------------------------------------------------------

// Creamos el tema global de la aplicación
const theme = createTheme({
  // Paleta de colores personalizada
  palette: {
    primary: {
      main: "#3a2c1a",         // Marrón oscuro: color principal (header, footer, etc.)
      contrastText: "#fff",    // Texto blanco sobre primary
    },
    secondary: {
      main: "#d6c3a1",         // Beige/dorado suave: color secundario (acentos, botones, etc.)
      contrastText: "#3a2c1a", // Texto marrón oscuro sobre secondary
    },
    background: {
      default: "#f9f6f2",      // Color de fondo general de la web
      paper: "#fff",           // Fondo de tarjetas, modales, etc.
    },
    text: {
      primary: "#222",         // Color principal del texto
      secondary: "#3a2c1a",    // Color secundario del texto
    },
    // Otros colores para estados (éxito, error, advertencia, info)
    success: {
      main: "#388e3c", // Verde para disponible
      contrastText: "#fff",
    },
    warning: {
      main: "#fbc02d", // Amarillo para mantenimiento
      contrastText: "#fff",
    },
    error: {
      main: "#b71c1c", // Rojo para ocupada
      contrastText: "#fff",
    },
    info: {
      main: "#f5f5f5",
      contrastText: "#3a2c1a",
    },
  },

  // Tipografías globales y por variante
  typography: {
    // Fuente primaria global (afecta a la mayoría de componentes)
    fontFamily: "'Montserrat', Arial, sans-serif",

    // Títulos (h1 a h6) usan Montserrat en negrita y diferentes tamaños
    h1: {
      fontFamily: "'Montserrat', Arial, sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontFamily: "'Montserrat', Arial, sans-serif",
      fontWeight: 700,
      fontSize: "2.25rem",
    },
    h3: {
      fontFamily: "'Montserrat', Arial, sans-serif",
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    h4: {
      fontFamily: "'Montserrat', Arial, sans-serif",
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    h5: {
      fontFamily: "'Montserrat', Arial, sans-serif",
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    h6: {
      fontFamily: "'Montserrat', Arial, sans-serif",
      fontWeight: 700,
      fontSize: "1rem",
    },

    // Texto normal (body1 y body2) usa Open Sans
    body1: {
      fontFamily: "'Open Sans', Arial, sans-serif", // Fuente secundaria para texto principal
      fontWeight: 400,
      fontSize: "1rem",
    },
    body2: {
      fontFamily: "'Open Sans', Arial, sans-serif", // Fuente secundaria para texto secundario
      fontWeight: 400,
      fontSize: "0.95rem",
    },
  },
});

// -----------------------------------------------------------------------------
// RENDERIZADO DE LA APP CON EL TEMA GLOBAL Y NORMALIZACIÓN DE ESTILOS
// -----------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      {/* ThemeProvider aplica el tema global a toda la app */}
    <ThemeProvider theme={theme}>
      {/* CssBaseline normaliza los estilos base del navegador */}
      <CssBaseline />
      <App />
    </ThemeProvider>
    </AuthProvider>
    
  </React.StrictMode>
);
