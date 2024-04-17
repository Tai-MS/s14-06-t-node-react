import { HeaderClient } from "../share/HeaderClient";
import { LoginButton } from "../share/LoginButtom";

export const SearchCard = () => {
  return (
    <>
      <div className="py-4 flex justify-center items-center ">
      <div className="w-[328px] h-56 bg-green-200 bg-opacity-50 rounded-xl shadow border border-green-200 flex items-center justify-center">
          <div>
            <img
              className="w-23 h-23 rounded-full ml-1"
              src="/images/userPhoto.svg"
              alt="User Photo"
            />
            <div className="flex flex-col ml-1">
              <span  className="font-bold mb-0">Laura Gonzalez</span>
              <div className="flex flex-col">              
                <label htmlFor="tarifa">
                Tarifa por hora:
                </label>
                <span id="barrioNombre">$3.000</span>             
            </div>
            </div>
            <div className="w-[100%] flex">
              <LoginButton to="*" width="w-full">Contratar</LoginButton>
            </div>
          </div>
          <div className=" ml-10">
            <div className="flex flex-col">              
                <label htmlFor="barrio" className="font-bold">
                  Barrio:
                </label>
                <span id="barrioNombre">Chacarita</span>             
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
                  Calificación:
                </label>
                <span id="calificacionNum">4.2</span>      
                <span id="verMas" className="underline">Ver más</span>         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
