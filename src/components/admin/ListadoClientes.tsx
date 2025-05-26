import React from "react";
const ListadoClientes: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div>{children || "Aquí irá el listado de clientes."}</div>
);
export default ListadoClientes;