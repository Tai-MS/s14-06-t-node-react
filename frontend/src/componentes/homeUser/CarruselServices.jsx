import React, { useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CarruselServices = ({ imagenes }) => {
  const navigate = useNavigate();
  console.log(
    "Contenido del objeto imagenes:",
    JSON.stringify(imagenes, null, 2)
  );
  const [mostrarImagenes, setMostrarImagenes] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  
const handleImagenClick = async (imagenId) => {
  try {
    const response = await axios.get(
      `https://s14-06-t-node-react.onrender.com/api/users/category/${imagenId}`
    );

    console.log("Información obtenida:", response.data);
    setServicioSeleccionado(response.data);
    navigate("/resultados-servicio", { state: { servicio: response.data } });
  } catch (error) {
    console.error("Error al obtener información:", error);
  }

  setMostrarImagenes(true);
};


  console.log(servicioSeleccionado);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    rows: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {!mostrarImagenes && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setMostrarImagenes(true)}
            className="mt-4 flex justify-center"
          >
            <img src="/images/buscadorProv.svg" alt="" className="mx-auto" />
          </button>
        </div>
      )}
      {mostrarImagenes && (
        <div className="mt-4">
          {/* Mostrar el título del carrusel */}
          <span className="text-lg font-semibold leading-tight text-left text-customGreen">
            ¿Qué servicio buscas?
          </span>

          {/* Mostrar el carrusel */}
          <Slider {...settings} className="mt-4">
            {imagenes.map((imagen) => (
              <div key={imagen.id}>
                {/* Enlace clicable que llama a handleImagenClick al hacer clic */}
                <button
                  onClick={() => handleImagenClick(imagen.id)}
                  className="cursor-pointer"
                >
                  <img src={imagen.src} alt={imagen.alt} className="mx-auto" />
                </button>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};
