import RecepcionistaHeader from "../components/ui/header/RecepcionistaHeader";
import Footer from "../components/ui/footer/Footer";
import { Outlet } from "react-router-dom";

const RecepcionistaLayout = () => (
  <>
    <RecepcionistaHeader />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default RecepcionistaLayout;