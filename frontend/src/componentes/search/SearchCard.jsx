import { LoginButton } from "../share/LoginButtom";

const imageUrls = [
  "/images/userPhoto.svg",
  "/images/userPhoto2.svg",
  "/images/userPhoto3.svg",
];

let currentImageIndex = 0;

const getNextImageUrl = () => {
  const imageUrl = imageUrls[currentImageIndex];

  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;

  return imageUrl;
};

export const SearchCard = ({ servicio }) => {
  console.log(servicio)
  const imageUrl = getNextImageUrl();

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
              {servicio.category}
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
            <LoginButton to="*" width="w-full">
              Contratar
            </LoginButton>
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
