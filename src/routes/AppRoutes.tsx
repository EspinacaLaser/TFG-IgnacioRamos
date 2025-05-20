// Description: This file contains the routing configuration for the application.
// It uses React Router to define the routes for different user roles (Cliente, Recepcionista, Admin).
import { Routes, Route, Navigate } from 'react-router-dom';

import ClienteLayout from '../layouts/ClienteLayout';
import RecepcionistaLayout from '../layouts/RecepcionLayout';
import AdminLayout from '../layouts/AdminLayout';

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
  <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<Login />} />

    <Route path="/cliente" element={<ClienteLayout />}>
      <Route path="home" element={<ClienteHome />} />
      <Route path="reservas" element={<ClienteReservas />} />
      <Route path="facturas" element={<ClienteFacturas />} />
    </Route>

    <Route path="/recepcionista" element={<RecepcionistaLayout />}>
      <Route path="home" element={<RecepcionistaHome />} />
      <Route path="reservas" element={<RecepcionistaReservas />} />
      <Route path="horario" element={<RecepcionistaHorario />} />
    </Route>

    <Route path="/admin" element={<AdminLayout />}>
      <Route path="home" element={<AdminHome />} />
      <Route path="habitaciones" element={<AdminHabitaciones />} />
      <Route path="horarios" element={<AdminHorarios />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;