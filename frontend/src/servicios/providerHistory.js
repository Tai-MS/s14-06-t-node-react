import axios from "axios";

export const fetchProviderHistorial = async (userId) => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/users/${userId}/provided-services`;
    const response = await axios.get(url);
    const servicesProvided = response.data;

    console.log(response);
    return servicesProvided;
  } catch (error) {
    console.error("Error al obtener el historial de proveedores", error);
    return [];
  }
};