import React, { useEffect } from "react";
import styles from "./Notifications.module.css";

const Notifications = () => {
  useEffect(() => {
    // Lógica para actualizar el menú lateral, indicando que esta opción está activa
    // Esto puede implicar la gestión de una clase activa para destacar el enlace
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Notificaciones</h2>
    </div>
  );
};

export default Notifications;
