import Navbar from "./Navbar";
import logo from "../../../assets/react.svg"; // Cambia por tu logo real
import { useNavigate } from "react-router-dom";

/**
 * Header principal para la interfaz de cliente.
 * Muestra el logo, el nombre de la app, el nombre del usuario autenticado y un botón para cerrar sesión.
 */
const Header = () => {
  const navigate = useNavigate();

  // Recupera el usuario autenticado desde localStorage
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    // Limpia el usuario autenticado y redirige al login
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
        {/* Muestra el nombre del usuario si está autenticado */}
        {user && (user.nombre || user.nombre_completo) && (
          <span className="ml-4 text-white text-base">
            Hola, {user.nombre || user.nombre_completo}
          </span>
        )}
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