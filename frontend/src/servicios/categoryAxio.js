import axios from 'axios';

export const fetchCategoryIds = async () => {
  try {

    const response = await axios.get('https://s14-06-t-node-react.onrender.com/services');
    const categories = response.data;

    return categories
  } catch (error) {
    console.error('Error al obtener IDs de categorías:', error);
    return [];
  }
};


