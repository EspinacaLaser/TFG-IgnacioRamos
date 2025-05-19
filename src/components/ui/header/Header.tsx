import Navbar from "./Navbar";
import logo from "../../../assets/react.svg"; // Cambia por tu logo real

const Header = () => (
  <header className="bg-gradient-to-r from-[#6d166a] via-[#7e2b7a] to-[#cae303] px-4 py-3 flex items-center justify-between shadow-md">
    <div className="flex items-center gap-3">
      <img src={logo} alt="Logo Hotel" className="h-12 w-auto rounded" />
      <span className="text-white text-2xl font-bold tracking-wide drop-shadow">Hotel Gestión</span>
    </div>
    <Navbar />
  </header>
);

export default Header;