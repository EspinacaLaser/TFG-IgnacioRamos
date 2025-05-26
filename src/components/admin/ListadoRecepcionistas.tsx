import React from "react";
const ListadoRecepcionistas: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div>{children || "Aquí irá el listado de trabajadores/recepcionistas."}</div>
);
export default ListadoRecepcionistas;