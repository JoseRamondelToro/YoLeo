import React, { useState, useEffect } from "react";
import styles from "./InfoCuenta.module.css";

const InfoCuenta = () => {
  const [username, setUsername] = useState(""); //almacena el username
  const [email, setEmail] = useState(""); //almacena el email
  const [userId, setUserId] = useState(""); //almacena el id

  useEffect(() => {
    // Recuperar el nombre de usuario desde localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No se encontró el token de autenticación");
      return;
    }

    // Obtener los datos del usuario incluyendo el ID
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/users/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUsername(data.username);
          setEmail(data.email);
          setUserId(data.id); // Guardar el ID del usuario
        } else {
          console.error("Error al obtener los datos del usuario");
        }
      } catch (error) {
        console.error("Error en la solicitud de usuario", error);
      }
    };
    fetchUserData();
  }, []);

  const handleSave = async () => {
    const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(
        `http://localhost:1337/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud de actualización");
      }

      localStorage.setItem("username", username);
      alert("Los cambios han sido guardados.");
      window.location.reload(); // Esto recarga la página y asegura que el header se actualice
    } catch (error) {
      console.error("Error en la solicitud de actualización", error);
    }
  };

  return (
    <div className={styles.accountContainer}>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>Información de la cuenta</h2>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Nombre:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Permitir la edición
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">
              Dirección de correo electrónico (no editable):
            </label>
            <input type="text" value={email} readOnly />
          </div>
          <button
            type="button"
            className={styles.saveButton}
            onClick={handleSave}
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoCuenta;
