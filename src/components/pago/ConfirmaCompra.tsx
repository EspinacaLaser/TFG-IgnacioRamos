import Button from "@mui/material/Button";

/**
 * Botón para confirmar la compra.
 * Props:
 * - onConfirm: función que se ejecuta al pulsar el botón.
 * - loading: si está en proceso de pago (opcional).
 * - disabled: si debe estar deshabilitado (opcional).
 */
const ConfirmaCompra: React.FC<{ onConfirm: () => void; loading?: boolean; disabled?: boolean }> = ({
  onConfirm,
  loading = false,
  disabled = false,
}) => (
  <Button
    variant="contained"
    color="success"
    onClick={onConfirm}
    disabled={disabled || loading}
    fullWidth
  >
    {loading ? "Procesando..." : "Confirmar compra"}
  </Button>
);

export default ConfirmaCompra;