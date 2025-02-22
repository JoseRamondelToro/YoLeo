// MenuLateral.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLateral.module.css";

const MenuLateral = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className={styles.menuContainer}>
      <h2 className={styles.title}>Mi cuenta</h2>
      <ul className={styles.menuList}>
        <li className={isActive("/info-account/info") ? styles.active : ""}>
          <Link to="info">Información de la cuenta</Link>
        </li>
        <li className={isActive("/info-account/loans") ? styles.active : ""}>
          <Link to="loans">Préstamos y reservas</Link>
        </li>
        <li
          className={
            isActive("/info-account/notifications") ? styles.active : ""
          }
        >
          <Link to="notifications">Notificaciones</Link>
        </li>
        <li className={isActive("/info-account/history") ? styles.active : ""}>
          <Link to="history">Historial</Link>
        </li>
        <li
          className={isActive("/info-account/favorites") ? styles.active : ""}
        >
          <Link to="favorites">Favoritos</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuLateral;
