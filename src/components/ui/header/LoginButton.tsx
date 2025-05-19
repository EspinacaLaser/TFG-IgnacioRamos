import { Link } from "react-router-dom";

const LoginButton = () => (
  <Link to="/login">
    <button className="ml-4 px-4 py-2 bg-[#6d166a] text-white rounded font-semibold hover:bg-yellow-300 hover:text-[#6d166a] transition">
      Login
    </button>
  </Link>
);

export default LoginButton;