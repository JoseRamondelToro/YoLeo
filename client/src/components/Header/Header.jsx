import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import scrolledStyles from "./HeaderScrolled.module.css"; // CSS para el estado scrolled
import logo from "./Logo.png";

const Header = () => {
  const [username, setUsername] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const updateUsername = () => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    };
    window.addEventListener("storage", updateUsername);
    updateUsername();

    return () => {
      window.removeEventListener("storage", updateUsername);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("authToken");
    setUsername(null);
    navigate("/login");
    window.location.reload();
    alert("Sesión cerrada exitosamente");
  };

  const appliedStyles = isScrolled ? scrolledStyles : styles;

  return (
    <header className={appliedStyles.header}>
      <div className={appliedStyles.container}>
        <div className={appliedStyles.logoSection}>
          <Link to="/">
            <img src={logo} alt="YoLeo Logo" className={appliedStyles.logo} />
          </Link>
        </div>
        <nav className={appliedStyles.navbar}>
          <Link to="/informacion">Información</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="#">Eventos</Link>
          <Link to="#">Librerías</Link>
          <Link to="#">Búsqueda</Link>
          <Link to="#" className={appliedStyles.donate}>
            Donar
          </Link>
        </nav>
        <div
          className={appliedStyles.account}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span>Usuario:&ensp;</span>
          {username ? (
            <>
              <span className={appliedStyles.username}>{username}</span>
              {isDropdownOpen && (
                <div className={appliedStyles.dropdownMenu}>
                  <Link to="/info-account/info">Información de la cuenta</Link>
                  <Link to="/info-account/loans">Préstamos y reservas</Link>
                  <Link to="/info-account/notifications">Notificaciones</Link>
                  <Link to="/info-account/history">Historial</Link>
                  <Link to="/info-account/favorites">Favoritos</Link>
                  <button
                    onClick={handleLogout}
                    className={appliedStyles.logoutButton}
                  >
                    Desconectarse
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link to="/login">Mi cuenta</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
