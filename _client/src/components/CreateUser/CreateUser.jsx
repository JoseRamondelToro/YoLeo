import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "C:/Users/joseramon/ReactProjects/yoleo-app/client/src/services/api.js";
import styles from "./CreateUser.module.css";

const CreateUser = () => {
  const navigate = useNavigate();

  // Estados para gestionar los datos del formulario
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validar que las contraseñas coinciden
    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    console.log(userData);

    try {
      // Llamada a la función registerUser que interactúa con la API de Strapi
      const response = await registerUser(userData);
      console.log("Usuario registrado con éxito:", response);

      // Redirigir al login después de registrar el usuario
      navigate("/login");
    } catch (error) {
      setErrorMessage("Error al registrar usuario");
      console.error("Error al registrar usuario:", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Crear una cuenta</h2>
      <form className={styles.form} onSubmit={handleSignup}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <button type="submit" className={styles.loginButton}>
          Registrarse
        </button>
      </form>
      <div className={styles.signupPrompt}>
        <p>
          ¿Ya tienes cuenta?{" "}
          <a href="#" onClick={() => navigate("/login")}>
            Inicia sesión
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default CreateUser;
