import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ClienteHome from '../pages/cliente/ClienteHome';
import ClienteReservas from '../pages/cliente/ClienteReservas';
import ClienteFacturas from '../pages/cliente/ClienteFacturas';

import RecepcionistaHome from '../pages/recepcion/RecepcionistaHome';
import RecepcionistaReservas from '../pages/recepcion/RecepcionistaReservas';
import RecepcionistaHorario from '../pages/recepcion/RecepcionistaHorario';

import AdminHome from '../pages/admin/AdminHome';
import AdminHabitaciones from '../pages/admin/AdminHabitaciones';
import AdminHorarios from '../pages/admin/AdminHorario';

import Login from '../pages/shared/Login';
import NotFound from '../pages/shared/NotFound';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      
      <Route path="/cliente/home" element={<ClienteHome />} />
      <Route path="/cliente/reservas" element={<ClienteReservas />} />
      <Route path="/cliente/facturas" element={<ClienteFacturas />} />

      <Route path="/recepcionista/home" element={<RecepcionistaHome />} />
      <Route path="/recepcionista/reservas" element={<RecepcionistaReservas />} />
      <Route path="/recepcionista/horario" element={<RecepcionistaHorario />} />

      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/admin/habitaciones" element={<AdminHabitaciones />} />
      <Route path="/admin/horarios" element={<AdminHorarios />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
