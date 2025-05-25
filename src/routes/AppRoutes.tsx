// Description: Este archivo contiene la configuración de rutas de la aplicación.
// Utiliza React Router para definir las rutas para los diferentes roles de usuario (Cliente, Recepcionista, Admin).

import { Routes, Route, Navigate } from 'react-router-dom';

import ClienteLayout from '../layouts/ClienteLayout';
import AdminLayout from '../layouts/AdminLayout';

import ClienteHome from '../pages/cliente/ClienteHome';
import ClienteReservas from '../pages/cliente/MisReservas';
import ClienteFacturas from '../pages/cliente/ClienteFacturas';
import ClienteHabitaciones from '../pages/cliente/Habitaciones';
import PasarelaPago from '../pages/cliente/PasarelaPago';

import RecepcionistaHome from '../pages/recepcion/RecepcionistaHome';

import AdminHome from '../pages/admin/AdminHome';
import AdminHabitaciones from '../pages/admin/AdminHabitaciones';
import AdminHorarios from '../pages/admin/AdminHorario';

import Login from '../pages/shared/Login';
import Registro from '../pages/shared/Registro';
import NotFound from '../pages/shared/NotFound';

import ReservaDatosPersonales from '../pages/cliente/ReservaDatosPersonales';
import RecepcionLayout from '../layouts/RecepcionLayout';


const AppRoutes = () => (
  <Routes>
    {/* Redirige la raíz al login */}
    <Route path="/" element={<Navigate to="/login" replace />} />

    {/* Ruta de login */}
    <Route path="/login" element={<Login />} />

    {/* Ruta de registro de clientes */}
    <Route path="/registro" element={<Registro />} />

    {/* Rutas privadas para clientes */}
    <Route path="/cliente" element={<ClienteLayout />}>
      <Route path="home" element={<ClienteHome />} />
      <Route path="habitaciones" element={<ClienteHabitaciones />} /> {/* <-- Añadido */}
      <Route path="reservas" element={<ClienteReservas />} />
      <Route path="facturas" element={<ClienteFacturas />} />
    </Route>

    {/* Rutas privadas para recepcionistas */}
    <Route path="/recepcionista" element={<RecepcionLayout />}>
      <Route path="home" element={<RecepcionistaHome />} />
    </Route>

    {/* Rutas privadas para administradores */}
    <Route path="/admin" element={<AdminLayout />}>
      <Route path="home" element={<AdminHome />} />
      <Route path="habitaciones" element={<AdminHabitaciones />} />
      <Route path="horarios" element={<AdminHorarios />} />
    </Route>
    {/* Ruta para reservar una habitación (cliente) */}
    <Route path="/cliente" element={<ClienteLayout />}>
      <Route path="home" element={<ClienteHome />} />
      <Route path="habitaciones" element={<ClienteHabitaciones />} />
      <Route path="reservas" element={<ClienteReservas />} />
      <Route path="reservar/:habitacionId" element={<ReservaDatosPersonales />} />
      <Route path="pago" element={<PasarelaPago />} />
    </Route>
    {/* Ruta para página no encontrada */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;