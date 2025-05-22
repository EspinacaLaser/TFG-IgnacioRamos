import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/ui/header/AdminHeader";
import Footer from "../components/ui/footer/Footer";

const AdminLayout: React.FC = () => (
  <>
    <AdminHeader />
    <main className="bg-yellow-50 min-h-screen p-4">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default AdminLayout;