import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "src/services/api.js";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await loginUser(userData);

      // Verifica que la respuesta tiene los datos esperados
      if (response.jwt && response.user) {
        const { jwt, user } = response;

        // Guarda el token y el nombre de usuario en localStorage
        localStorage.setItem("authToken", jwt);
        localStorage.setItem("username", user.username);
        console.log(localStorage.getItem("username"));

        // Redirigir al home o a otra página
        navigate("/");

        // Forzar la recarga del componente para que el header muestre el username
        window.location.reload();

        alert("Inicio de sesión exitoso");
      } else {
        throw new Error("Autenticación fallida: No se recibió el token JWT.");
      }
    } catch (error) {
      alert("Error al iniciar sesión");
      console.error("Error al autenticar:", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Identificación</h2>
      <form className={styles.form} onSubmit={handleLogin}>
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
        <button type="submit" className={styles.loginButton}>
          Conectarse
        </button>
      </form>
      <div className={styles.signupPrompt}>
        <p>
          ¿No tienes cuenta?{" "}
          <a href="#" onClick={() => navigate("/create-user")}>
            Haz clic aquí
          </a>{" "}
          para inscribirte.
        </p>
      </div>
      <div className={styles.supportLink}>
        <a href="#">Contactar al soporte técnico</a>
      </div>
    </div>
  );
};

export default LoginPage;
