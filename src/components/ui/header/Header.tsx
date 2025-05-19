import Navbar from "./Navbar";
import logo from "../../../assets/react.svg"; // o la ruta de tu logo
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src={logo} alt="Logo Hotel" />
    </div>
    <Navbar />
  </header>
);

export default Header;