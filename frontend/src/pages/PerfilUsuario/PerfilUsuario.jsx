import { useEffect, useState } from 'react';
import { HeaderProvider } from '../../componentes/share/HeaderProvider.jsx';
import  { useContext } from 'react';
import UserContext from "../../componentes/Registration/UserContext.jsx"; // Importar el contexto de usuario
import { useAuthStore } from "../../hooks/useAuthStore";
export const PerfilUsuario = () => {
  const { userData, setUserData } = useContext(UserContext); // Obtener los datos del usuario y la función para establecer los datos del contexto
  const [editing, setEditing] = useState(false); // Estado para controlar si se está editando el perfil
  const { editUser, user} =useAuthStore();
  const handleModificarClick = () => {
    // Cambiar el estado de "editing" a true para habilitar la edición del perfil
    setEditing(true);
  };

  const handleSaveChanges = () => {
    // lógica para guardar los cambios en los datos del usuario
    const combinedValues={
      _id: user._id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      rol:user.rol,
      city: user.city,
      service_type: userData.service_type,
      type_of_payment: userData.type_of_payment,
      phone: userData.phone,
      address:user.address
    }; 
    console.log('Guardar cambios', combinedValues);

    editUser(combinedValues); 
    setEditing(false);
  };
  const handleCancelEdit = () => {
    // Cancelar la edición, restaurando los datos originales del usuario y cambiando el estado de "editing" a false
    setEditing(false);
  };


  return (
    <>
      <HeaderProvider showMenu={true} />
      <div className="w-full mt-4 flex items-center justify-center ">
      <div className="w-[90%] md:w-[50%]  bg-gradient-to-b
       from-green-200 to-neutral-400 rounded-xl
       flex flex-col justify-center items-center gap-5 p-5">
        
        <div className="px-6 py-4">
          <div className="w-[95%]  text-neutral-900 justify-center text-2xl font-bold font-['Manrope']">{`Hola ${userData.firstName} ${userData.lastName}`}</div>
          <p className="text-neutral-900 text-base font-semibold font-['Manrope']">
          Mi perfil</p>
        </div>

        <div className="w-[80%]  bg-gray-50 rounded-xl">
          <div className="px-6 pt-4 pb-2">
          <div className="text-neutral-900 text-base font-medium font-['Manrope']">Datos personales
          </div>
          {/* Campos para el nombre */}
           <div className="flex items-center justify-between">
            <span className="text-neutral-900 text-base font-normal font-['Manrope'] 1px">Nombre</span>
            {editing ? (
              <input
                type="text"
                className="text-gray-600 text-sm border-b border-gray-500"
                value={userData.firstName}
                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
              />
            ) : (
              <span className="text-gray-600 text-sm">{`${userData.firstName}`}</span>
            )}
          </div>

          {/* Campos para el apellido */}
          <div className="flex items-center justify-between">
            <span className="text-neutral-900 text-base font-normal font-['Manrope']">Apellido</span>
            {editing ? (
              <input
                type="text"
                className="text-gray-600 text-sm border-b border-gray-500"
                value={userData.lastName}
                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
              />
            ) : (
              <span className="text-gray-600 text-sm">{`${userData.lastName}`}</span>
            )}
          </div>

          {/* Campos para el email */}
          <div className="flex items-center justify-between">
            <span className="text-neutral-900 text-base font-normal font-['Manrope']">Email</span>
            {editing ? (
              <input
                type="email"
                className="text-gray-600 text-sm border-b border-gray-500"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            ) : (
              <span className="text-gray-600 text-sm">{`${userData.email}`}</span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-neutral-900 text-base font-normal font-['Manrope']">Teléfono</span>
            {editing ? (
              <input
                type="phone"
                className="text-gray-600 text-sm border-b border-gray-500"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
              />
            ) : (
              <span className="text-gray-600 text-sm">{`${userData.phone}`}</span>
            )}
          </div>
          {/* Agrega los campos restantes para los datos del usuario con una lógica similar */}
          <div className="flex justify-end mt-4">
            {editing ? (
              <>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleSaveChanges} // Guardar los cambios
                >
                  Guardar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancelEdit} // Cancelar la edición
                >
                  Cancelar
                </button>
              </>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleModificarClick} // Habilitar la edición
              >
                Modificar
              </button>
            )}
          </div>
        </div>
        </div>

        

        <div className="w-[80%]  bg-gray-50 rounded-xl">
          <div className="px-6 pt-4 pb-2">
          <div className="text-neutral-900 text-base font-medium font-['Manrope']">Servicio registrado
          </div>
          {/* Campos para el servicio */}
           <div className="flex items-center justify-between">
            {editing ? (
              <input
                type="text"
                className="text-gray-600 text-sm border-b border-gray-500"
                value={userData.service_type}
                onChange={(e) => setUserData({ ...userData, service_type: e.target.value })}
              />
            ) : (
              <span className="text-gray-600 text-sm">{`${userData.service_type}`}</span>
            )}
          </div>

          <div className="flex justify-end mt-4">
            {editing ? (
              <>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleSaveChanges} // Guardar los cambios
                >
                  Guardar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancelEdit} // Cancelar la edición
                >
                  Cancelar
                </button>
              </>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleModificarClick} // Habilitar la edición
              >
                Modificar
              </button>
            )}
          </div>
        </div>
        </div>

        <div className="w-[80%]  bg-gray-50 rounded-xl">
          <div className="px-6 pt-4 pb-2">
          <div className="text-neutral-900 text-base font-medium font-['Manrope']">Medios de pago
          </div>
          {/* Campos para medios de pago */}
           <div className="flex items-center justify-between">  
            {editing ? (
              <input
                type="text"
                className="text-gray-600 text-sm border-b border-gray-500"
                value={userData.type_of_payment}
                onChange={(e) => setUserData({ ...userData, type_of_payment: e.target.value })}
              />
            ) : (
              <span className="text-gray-600 text-sm">{`${userData.type_of_payment}`}</span>
            )}
          </div>

          <div className="flex justify-end mt-4">
            {editing ? (
              <>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleSaveChanges} // Guardar los cambios
                >
                  Guardar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancelEdit} // Cancelar la edición
                >
                  Cancelar
                </button>
              </>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleModificarClick} // Habilitar la edición
              >
                Modificar
              </button>
            )}
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};
