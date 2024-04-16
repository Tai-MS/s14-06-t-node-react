import { HeaderClient } from "../share/HeaderClient.jsx";
import { CarruselServices } from "./CarruselServices.jsx";

export const HomeClient = () => {
  const CarruselImg = [
    { id: 'img1', src: '/images/CarruselServices/AdultCare.svg', alt: 'Imagen cuidado adulto' },
    { id: 'img2', src: '/images/CarruselServices/babySister.svg', alt: 'Imagen niñera' },
    { id: 'img3', src: '/images/CarruselServices/bricklayer.svg', alt: 'Imagen cuidado adulto' },
    { id: 'img4', src: '/images/CarruselServices/carpenter.svg', alt: 'Imagen carpintero' },
    { id: 'img5', src: '/images/CarruselServices/blacksmith.svg', alt: 'Imagen herrero' },
    { id: 'img6', src: '/images/CarruselServices/clean.svg', alt: 'Imagen limpieza' },
    { id: 'img7', src: '/images/CarruselServices/electrician.svg', alt: 'Imagen electricista' },
    { id: 'img8', src: '/images/CarruselServices/gardener.svg', alt: 'Imagen jardinero' },
    { id: 'img9', src: '/images/CarruselServices/gasman.svg', alt: 'Imagen gasista' },
    { id: 'img10', src: '/images/CarruselServices/plumber.svg', alt: 'Imagen plomero' },
    { id: 'img11', src: '/images/CarruselServices/move.svg', alt: 'Imagen flete' },
    { id: 'img11', src: '/images/CarruselServices/locksmith.svg', alt: 'Imagen cerrajero' },
  ];
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

        <CarruselServices imagenes={CarruselImg} />

        <div className="mt-8">
          <p className="text-left">
            Forma parte del equipo de profesionales de ServiHogar. Vos elegís
            que días y horarios podes brindar tus servicios ¡Inscríbete gratis
            en nuestra página y comienza a trabajar !
          </p>
        </div>

        <div className="mt-8">
          <h2 className="font-bold">Preguntas frecuentes</h2>
          <div className="mt-4">
            <img src="/images/quetions/q1.svg" alt="1" />
            <img src="/images/quetions/q2.svg" alt="2" />
            <img src="/images/quetions/q3.svg" alt="3" />
            <img src="/images/quetions/q4.svg" alt="4" />
            <img src="/images/quetions/q5.svg" alt="5" />
          </div>
        </div>

        <div className="mt-8">
          <img src="/images/quetions/footer.svg" alt="" />
        </div>
      </div>
    </>
  );
};
