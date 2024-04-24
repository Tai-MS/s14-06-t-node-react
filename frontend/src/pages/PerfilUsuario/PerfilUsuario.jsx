import { HeaderLanding } from "../../componentes/landing/HeaderLanding.jsx";
import React, { useContext } from 'react';
import UserContext from "../../componentes/Registration/UserContext.jsx"; // Importar el contexto de usuario

export const PerfilUsuario = () => {
  const { userData } = useContext(UserContext); // Obtener los datos del usuario del contexto

  return (
    <>
      <HeaderLanding />
      <div className="max-w-sm mx-auto bg-green-200 rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{`Hola ${user.firstName} ${user.lastName}`}</div>
          <p className="text-gray-700 text-base">Mi perfil</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm font-medium">Nombres</span>
            <span className="text-gray-600 text-sm">{`${user.firstName} ${user.lastName}`}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm font-medium">Teléfono</span>
            <span className="text-gray-600 text-sm">{`${user.phone}`}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm font-medium">Mail</span>
            <span className="text-gray-600 text-sm">{`${user.email}`}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm font-medium">Dirección</span>
            <span className="text-gray-600 text-sm">{`${user.direccion}`}</span>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleModificarClick} // Llamar a la función cuando se hace clic en el botón
            >
              Modificar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};




  