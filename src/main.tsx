import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "./context/AuthContext";

// -----------------------------------------------------------------------------
// CONFIGURACIÓN DEL TEMA DE MUI (Material UI) PARA TIPOGRAFÍAS Y COLORES GLOBALES
// -----------------------------------------------------------------------------

const theme = createTheme({
  palette: {
    primary: {
      main: "#3a2c1a",
      contrastText: "#fff",
    },
    secondary: {
      main: "#d6c3a1",
      contrastText: "#3a2c1a",
    },
    background: {
      default: "#f9f6f2",
      paper: "#fff",
    },
    text: {
      primary: "#222",
      secondary: "#3a2c1a",
    },
    success: {
      main: "#388e3c",
      contrastText: "#fff",
    },
    warning: {
      main: "#fbc02d",
      contrastText: "#fff",
    },
    error: {
      main: "#b71c1c",
      contrastText: "#fff",
    },
    info: {
      main: "#f5f5f5",
      contrastText: "#3a2c1a",
    },
    // Colores personalizados para detalles de UI
    divider: "#e0e0e0", // Para separadores de tabla
    action: {
      hover: "#f5f5f5", // Hover en filas de tabla
      selected: "#ede7e3", // Selección en tablas o listas
    },
  },
  typography: {
    fontFamily: "'Montserrat', Arial, sans-serif",
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
    body1: {
      fontFamily: "'Open Sans', Arial, sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
    },
    body2: {
      fontFamily: "'Open Sans', Arial, sans-serif",
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);