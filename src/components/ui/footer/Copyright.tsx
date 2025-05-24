/**
 * Copyright: muestra el aviso legal de derechos de autor.
 * Usa la fuente secundaria (Open Sans) por defecto en <small>.
 */
const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <small className="block text-sm text-white/80">
      &copy; {year} Hotel Gestión. Proyecto TFG - Ignacio
    </small>
  );
};

export default Copyright;