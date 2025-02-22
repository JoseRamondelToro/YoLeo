import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./Logo.png";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.topSection}>
      <div className={styles.logoSection}>
        <span className={styles.welcomeText}>Bienvenido a</span>
        <Link to="/">
          <img src={logo} alt="YoLeo Logo" className={styles.logo} />
        </Link>
      </div>
    </div>
    <div className={styles.bottomSection}>
      <nav className={styles.navbar}>
        <Link to="/informacion">Información</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="#">Eventos</Link>
        <Link to="#">Librerías</Link>
        <Link to="#">Búsqueda</Link>
        <Link to="#" className={styles.donate}>
          Donar
        </Link>
      </nav>
      <div className={styles.account}>
        <Link to="/login">Mi cuenta</Link>
      </div>
    </div>
  </header>
);

export default Header;
