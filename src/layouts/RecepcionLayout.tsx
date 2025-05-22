import React from "react";
import { Outlet } from "react-router-dom";
import RecepcionistaHeader from "../components/ui/header/RecepcionistaHeader";
import Footer from "../components/ui/footer/Footer";

const RecepcionistaLayout: React.FC = () => (
  <>
    <RecepcionistaHeader />
    <main className="bg-green-50 min-h-screen p-4">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default RecepcionistaLayout;