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
      main: "#3a2c1a", // Marrón oscuro para header/footer
      contrastText: "#fff",
    },
    secondary: {
      main: "#d6c3a1", // Beige/dorado suave (tu logo)
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
    error: {
      main: "#b71c1c",
      contrastText: "#fff",
    },
    warning: {
      main: "#5a0016",
      contrastText: "#fff",
    },
    info: {
      main: "#f5f5f5",
      contrastText: "#3a2c1a",
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