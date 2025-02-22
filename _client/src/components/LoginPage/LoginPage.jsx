import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { loginUser } from "C:/Users/joseramon/ReactProjects/yoleo-app/client/src/services/api.js"; // Importa la función para hacer el login

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      identifier: email,
      password: password,
    };

    try {
      const response = await loginUser(userData); // Llama a la función que hace la solicitud
      console.log("Login exitoso:", response);

      // Guarda el token de autenticación en localStorage o sessionStorage
      localStorage.setItem("authToken", response.jwt);

      // Redirige a la página principal después del login
      navigate("/");
    } catch (error) {
      setErrorMessage("Error en el login. Verifica tus credenciales.");
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleSignupRedirect = () => {
    navigate("/create-user"); // Redirigir a la página de creación de usuario
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
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <div className={styles.checkboxGroup}>
          <input type="checkbox" id="stayLoggedIn" />
          <label htmlFor="stayLoggedIn">Permanecer conectado</label>
        </div>
        <button type="submit" className={styles.loginButton}>
          Conectarse
        </button>
      </form>
      <div className={styles.signupPrompt}>
        <p>
          ¿No tienes cuenta?{" "}
          <a href="#" onClick={handleSignupRedirect}>
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
