import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <span>raquelFonseca.dev</span>
      </Link>
      <div>
        <nav
          onClick={toggleMenu}
          className={`${styles.menuSandwich} ${showMenu ? styles.show : ""}`}
        >
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/sobre">
            Sobre
          </Link>
          <Link className={styles.link} to="/projetos">
            Projetos
          </Link>
          <Link className={styles.link} to="/contatos">
            Contato
          </Link>
        </nav>
        <div className={styles.menuButton} onClick={toggleMenu}>
          <span className={styles.linha}></span>
          <span className={styles.linha}></span>
          <span className={styles.linha}></span>
        </div>
      </div>
    </header>
  );
}
export default Header;
