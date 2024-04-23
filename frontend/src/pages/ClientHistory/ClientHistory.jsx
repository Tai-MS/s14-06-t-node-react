import { SearchCard } from "../../componentes/search/SearchCard";
import { HeaderClient } from "../../componentes/share/HeaderClient";
import { FooterContact } from "../../componentes/share/FooterContact";
import { useAuthStore } from "../../hooks/useAuthStore.js";
import { ClientHistorialCard } from "../../componentes/ClientHistorial/ClientHistorialCard.jsx";
//import { useLocation } from 'react-router-dom';

export const ClientHistorial = () => {
    const { user, handleLogout }=useAuthStore() 
  //   const location = useLocation();
  //   const servicios = location.state?.servicio; // servicios es un array de objetos

  //   console.log('Los servicios recibidos son:', servicios);

  return (
    <>
      <HeaderClient showMenu={true} />

      <div className="p-4 flex justify-center items-center ">
      <div className="w-[350px] h-[500px] rounded-xl shadow bg-gradient-to-b from-[#BCF5CC] to-[#86B282]">
        <h2 className="font-semibold text-2xl mb-3 mt-1 text-center"> {`¡Hola ${user.firstName}!`}</h2>
          <div className="ml-4 mt-4 text-black font-semibold">
          Historial contrataciones
          </div>       
         <ClientHistorialCard/>

     
          

         
         
        </div>
      </div>
      <FooterContact/>
    </>
  );
};
