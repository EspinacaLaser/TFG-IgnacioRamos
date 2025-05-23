import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', Arial, sans-serif", // Cambia por la fuente que quieras
  },
  palette: {
    primary: {
      main: "#1976d2", // Cambia por tu color principal
    },
    secondary: {
      main: "#ff9800", // Cambia por tu color secundario
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);