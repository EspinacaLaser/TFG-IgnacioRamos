import React from 'react';

const Copyright: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <small>
      &copy; {year} Hotel Gestión. Proyecto TFG - Ignacio (Tu Nombre)
    </small>
  );
};

export default Copyright;

// Este componente se encarga de mostrar el copyright en el pie de página
// de la aplicación. Utiliza el año actual para mostrar la fecha correcta.