const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <small className="block text-sm text-white/80">
      &copy; {year} Hotel Gestión. Proyecto TFG - Ignacio
    </small>
  );
};

export default Copyright;