import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";

const ClienteLayout: React.FC = () => (
  <>
    <Header />
    <main className="bg-blue-50 min-h-screen p-4">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default ClienteLayout;