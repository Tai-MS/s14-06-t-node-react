import axios from "axios"; // Importa Axios
import { useAuthStore } from "../../hooks/useAuthStore.js";
import { Link, useNavigate } from "react-router-dom";

const imageUrls = [
  "/images/userPhoto.svg",
  // Puedes agregar más URLs de imágenes aquí
];

let currentImageIndex = 0;

const getNextImageUrl = () => {
  const imageUrl = imageUrls[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  return imageUrl;
};

export const SearchCard = ({ servicio }) => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  console.log(user);
  const token = localStorage.getItem("token");
  console.log(token);
  const imageUrl = getNextImageUrl();

  const handleContratarClick = (servicioId) => {
    const backendUrl = `https://s14-06-t-node-react.onrender.com/api/users/${user._id}/add-service`;

    const requestBody = {
      service_id: servicioId,
    };
    console.log(requestBody);
    // Realiza la solicitud al backend utilizando Axios
    axios
      .post(backendUrl, requestBody, {
        headers: {
          "x-token": token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate(`/empleado-confirmado`);
        } else {
          console.error("Error en la solicitud al backend");
        }
      })
      .catch((error) => {
        // Maneja los errores de la solicitud al backend
        console.error("Error al enviar la solicitud:", error);
      });
  };

  return (
    <div className="py-2 flex justify-center items-center">
      <div className="w-[328px] h-56 bg-green-200 bg-opacity-50 rounded-xl shadow-lg border border-green-200 flex items-center justify-center">
        <div>
          <div className="flex justify-center items-center">
            <img
              className="w-23 h-23 rounded-full ml-1"
              src={imageUrl}
              alt="User Photo"
            />
          </div>
          <div className="flex flex-col ml-1">
            <span className="font-bold mb-0 text-center">
              {servicio.createdBy}
            </span>
            <div className="flex flex-col">
              <label htmlFor="tarifa" className="font-bold">
                Tarifa por hora:
              </label>
              <span id="barrioNombre" className="text-center">
                Por acordar
              </span>
            </div>
          </div>
          <div className="w-[100%] flex">
            <button
              onClick={() => handleContratarClick(servicio._id)} // Pasar el ID del servicio
              className="bg-customGreen hover:bg-green-600 text-black font-semibold py-3 px-4 shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center rounded-full py-2 px-4 rounded w-full"
            >
              Contratar
            </button>
          </div>
        </div>
        <div className="ml-10">
          <div className="flex flex-col">
            <label htmlFor="barrio" className="font-bold">
              Barrio:
            </label>
            <span id="barrioNombre">Caba</span>
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="disponibilidad" className="font-bold mb-0">
              Disponibilidad:
            </label>
            <span id="disponibilidadDia">Lunes a viernes</span>
            <span id="disponibilidadHora">8 a 18hs</span>
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="Calificacion" className="font-bold">
              Servicio:
            </label>
            <span id="calificacionNum">{servicio.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
