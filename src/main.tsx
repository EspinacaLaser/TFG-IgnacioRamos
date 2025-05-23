import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Incluye las fuentes en tu index.html:
// <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet">

const theme = createTheme({
  palette: {
    primary: {
      main: "#800020", // Burdeos
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFD700", // Dorado
      contrastText: "#800020",
    },
    warning: {
      main: "#5a0016", // Burdeos oscuro
      contrastText: "#fff",
    },
    info: {
      main: "#f5f5f5", // Gris claro
      contrastText: "#800020",
    },
    background: {
      default: "#F9F6F2", // Fondo general
      paper: "#fff",
    },
    text: {
      primary: "#222",
      secondary: "#800020",
    },
    success: {
      main: "#388e3c",
      contrastText: "#fff",
    },
    error: {
      main: "#b71c1c",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "'Montserrat', 'Open Sans', Arial, sans-serif",
    h5: {
      fontFamily: "'Montserrat', Arial, sans-serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Montserrat', Arial, sans-serif",
      fontWeight: 700,
    },
    button: {
      fontFamily: "'Montserrat', Arial, sans-serif",
      fontWeight: 700,
      letterSpacing: 1,
    },
    body1: {
      fontFamily: "'Open Sans', Arial, sans-serif",
    },
    body2: {
      fontFamily: "'Open Sans', Arial, sans-serif",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);