import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";
import { Outlet } from "react-router-dom";

const RecepcionistaLayout = () => (
  <>
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default RecepcionistaLayout;