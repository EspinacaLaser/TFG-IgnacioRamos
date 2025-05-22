import Navbar from "./Navbar";
import logo from "../../../assets/react.svg"; // Cambia por tu logo real
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-[#6d166a] via-[#7e2b7a] to-[#cae303] px-4 py-3 flex flex-wrap items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo Hotel" className="h-12 w-auto rounded" />
        <span className="text-white text-2xl font-bold tracking-wide drop-shadow">
          Hotel Gestión
        </span>
      </div>
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <Navbar />
        <button
          onClick={handleLogout}
          className="bg-white text-[#6d166a] px-4 py-2 rounded font-semibold hover:bg-[#cae303] hover:text-[#7e2b7a] transition text-sm md:text-base"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};

export default Header;