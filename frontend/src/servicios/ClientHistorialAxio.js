import axios from "axios";

export const fetchClientHistorial = async (userId) => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/users/${userId}/adquired-services`;
    const response = await axios.get(url);
    const proveedores = response.data;
    return proveedores;
  } catch (error) {
    console.error("Error al obtener los proveedores contratados:", error);
    return [];
  }
};
