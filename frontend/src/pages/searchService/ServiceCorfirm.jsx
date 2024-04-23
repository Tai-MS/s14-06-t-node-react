import { SearchCard } from "../../componentes/search/SearchCard";
import { HeaderClient } from "../../componentes/share/HeaderClient";
import { FooterContact } from "../../componentes/share/FooterContact";
//import { useLocation } from 'react-router-dom';

export const ServiceCorfirm = () => {
  //   const location = useLocation();
  //   const servicios = location.state?.servicio; // servicios es un array de objetos

  //   console.log('Los servicios recibidos son:', servicios);

  return (
    <>
      <HeaderClient showMenu={true} />

      <div className=" text-2xl font-semibold text-customGreen mt-3 ml-3">
        Solicitar Emplead@
      </div>

      <div className="p-4 flex justify-center items-center ">
        <div className="w-[350px] h-[500px] bg-green-200 bg-opacity-30 rounded-xl shadow">
          <div className="ml-4 mt-4 text-customGreen font-semibold">
            Pedido confirmado
          </div>
          <div className="ml-4 mt-4">
            <div className=" text-sm font-normal ">
              Le enviaremos la propuesta a Laura y en cuanto acepte te
              avisaremos
            </div>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <img src="/images/pedidoConfirmado.svg" alt="pedido confirmado" />
          </div>
          <div className="px-4">
            <div className="flex flex-row ">
              <label htmlFor="Perfil Proveedor" className="font-semibold">Perfil:</label>
              <span id="perfilProveedor" className="ml-1"> Laura</span>
            </div>
          </div>

          <div className="px-4">
            <div className="flex flex-row ">
              {/* <label htmlFor="Perfil Proveedor" >Nota:</label> */}
              <span id="perfilProveedor" className="ml-1 mt-2 text-center"> 
              Los horarios y precio lo debes acordar con el proveedor en nuestro chat.
              </span>

            </div>
          </div>
          

          <div className=" text-sm font-normal ml-6 mt-4">
            <span className="text-justify">
          De ser necesario puedes cancelar  este pedido desde tu perfil → Historial de contrataciones
            </span>
            </div>
         
        </div>
      </div>
      <FooterContact/>
    </>
  );
};
