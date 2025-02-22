import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "src/services/api.js"; // Asegúrate de que la ruta sea correcta
import styles from "./CreateUser.module.css";

const CreateUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await registerUser(userData);

      if (response) {
        alert("Usuario creado con éxito");
        setTimeout(() => {
          navigate("/login");
        }, 1000); // Redirigir al login después de 1 segundo
      }
    } catch (error) {
      if (error.message.includes("already exists")) {
        alert("Ya existe un usuario con ese correo electrónico.");
      } else {
        alert("Error al crear el usuario. Inténtalo nuevamente.");
      }
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Crear una cuenta</h2>
      <form className={styles.form} onSubmit={handleSignup}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Nombre:</label>
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
