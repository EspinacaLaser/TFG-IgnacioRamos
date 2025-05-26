import React from "react";
const CrearHabitacionForm: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div>{children || "Aquí irá el formulario para crear habitaciones."}</div>
);
export default CrearHabitacionForm;