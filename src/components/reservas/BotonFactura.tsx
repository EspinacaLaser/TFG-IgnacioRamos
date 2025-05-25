import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

/**
 * Props para el botón de descarga de factura.
 * Recibe una función onClick que se ejecuta al pulsar el botón.
 */
interface BotonFacturaProps {
  onClick?: () => void;
}

/**
 * Botón estilizado para descargar la factura de una reserva.
 * Incluye icono de descarga y estilos coherentes con el diseño principal.
 * 
 * Ejemplo de uso:
 * <BotonFactura onClick={() => window.open('URL_FACTURA', '_blank')} />
 */
const BotonFactura: React.FC<BotonFacturaProps> = ({ onClick }) => (
  <Button
    variant="contained"
    color="primary"
    startIcon={<DownloadIcon />}
    sx={{
      fontFamily: "'Montserrat', Arial, sans-serif",
      fontWeight: "bold",
      letterSpacing: 1,
      borderRadius: 2,
      mt: 1,
    }}
    onClick={onClick}
  >
    DESCARGAR FACTURA
  </Button>
);

export default BotonFactura;