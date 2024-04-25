import React, { useEffect, useState } from "react";
import { HeaderClient } from "../share/HeaderClient.jsx";
import { CarruselServices } from "./CarruselServices.jsx";
import { fetchCategoryIds } from "../../servicios/categoryAxio.js";
import { FooterContact } from "../share/FooterContact.jsx";

export const HomeClient = () => {
  const [carruselImages, setCarruselImages] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const categories = await fetchCategoryIds();
      console.log("Categorías obtenidas:", categories);

      // Crear un mapa de categoría a ID
      const categoryToImageIdMap = {};
      categories.forEach((category) => {
        categoryToImageIdMap[category.name] = category._id;
      });

      // Actualizar las imágenes del carrusel (CarruselImg)
      const updatedImages = CarruselImg.map((image) => {
        // Verificar el alt de la imagen para categorías específicas
        if (image.alt === "Pintor" || image.alt === "Limpieza" || image.alt === "Plomero") {
          // Filtrar categorías del backend que coincidan con la categoría de la imagen
          const matchingCategories = categories.filter(
            (category) => category.category === image.alt
          );

          // Obtener los IDs de las categorías coincidentes
          const matchingCategoryIds = matchingCategories.map((category) => category);

          // Asignar los IDs de las categorías a la imagen
          return { ...image, id: matchingCategoryIds };
        } else {
          // Mantener la imagen sin cambios si no corresponde a una categoría específica
          return image;
        }
      });

      setCarruselImages(updatedImages);
    } catch (error) {
      console.error("Error al obtener IDs de categorías:", error);
    }
  };

  fetchData();
}, []);

  
  const CarruselImg = [
    {
      id: "img10",
      src: "/images/CarruselServices/pintores.svg",
      alt: "Pintor",
    },
    {
      id: "img11",
      src: "/images/CarruselServices/locksmith.svg",
      alt: "Limpieza",
    },
    {
      id: "img8",
      src: "/images/CarruselServices/gardener.svg",
      alt: "Plomero",
    },
    {
      id: "img7",
      src: "/images/CarruselServices/electrician.svg",
      alt: "Electricistas",
    },
    { id: "img9", src: "/images/CarruselServices/gasman.svg", alt: "Gacistas" },
    {
      id: "img1",
      src: "/images/CarruselServices/AdultCare.svg",
      alt: "Cuidado adulto",
    },
    {
      id: "img2",
      src: "/images/CarruselServices/babySister.svg",
      alt: "Niñera",
    },
    {
      id: "img3",
      src: "/images/CarruselServices/bricklayer.svg",
      alt: "Cuidado adulto",
    },
    {
      id: "img4",
      src: "/images/CarruselServices/carpenter.svg",
      alt: "Carpintero",
    },
    {
      id: "img5",
      src: "/images/CarruselServices/blacksmith.svg",
      alt: "Herrero",
    },
    { id: "img6", src: "/images/CarruselServices/clean.svg", alt: "Limpieza" },
    { id: "img11", src: "/images/CarruselServices/move.svg", alt: "Flete" },
  ];

  //console.log(carruselImages)

  return (
    <>
      <HeaderClient showMenu={true} />
      <div className="px-1">
        <div className="relative">
          <img
            src="/images/landingPhoto.svg"
            alt="Landing Image"
            className="w-full"
          />

          <div className=" flex items-center justify-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] bg-green-200 bg-opacity-50">
            Cada rincón de tu hogar merece atención especializada, encontrá lo
            que necesitas en ServiHogar
          </div>
        </div>

        <CarruselServices imagenes={carruselImages} />

        <div className="mt-8">
          <p className="text-center w-full">
            Forma parte del equipo de profesionales de ServiHogar. Vos elegís
            que días y horarios podes brindar tus servicios ¡Inscríbete gratis
            en nuestra página y comienza a trabajar !
          </p>
        </div>

        <div className="mt-8">
          <h2 className="font-bold">Preguntas frecuentes</h2>
          <div className="mt-4">
            <img src="/images/quetions/q1.svg" alt="1" className="w-full" />
            <img src="/images/quetions/q2.svg" alt="2" className="w-full" />
            <img src="/images/quetions/q3.svg" alt="3" className="w-full" />
            <img src="/images/quetions/q4.svg" alt="4" className="w-full" />
            <img src="/images/quetions/q5.svg" alt="5" className="w-full" />
          </div>
        </div>

        <div className="mt-8">
          <FooterContact />
        </div>
      </div>
    </>
  );
};
