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

// Función registro de usuario
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/local/register`,
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error("Error en el registro");
  }
};

// Función login de usuario
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/local`, {
      identifier: userData.email, // Strapi usa "identifier" para el email
      password: userData.password,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Error en la autenticación"
    );
  }
};
