import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Importa tus páginas principales
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import Reception from './pages/reception/Reception';
import ClientProfile from './pages/client/ClientProfile';
import NotFound from './pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      {/* Rutas para roles */}
      <Route path="/admin/*" element={<Dashboard />} />
      <Route path="/reception/*" element={<Reception />} />
      <Route path="/client/*" element={<ClientProfile />} />

      {/* Ruta para páginas no encontradas */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
