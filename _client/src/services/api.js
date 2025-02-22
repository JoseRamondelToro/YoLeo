import axios from "axios";

const API_URL = "http://localhost:1337/api"; // URL de Strapi

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

// función registro de usuario
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Error en el registro");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
};

// Función autenticación de usuario
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/local`, userData);
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};
