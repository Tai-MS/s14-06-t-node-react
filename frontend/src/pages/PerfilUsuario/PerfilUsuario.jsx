import {  useState } from 'react';
import { HeaderProvider } from '../../componentes/share/HeaderProvider.jsx';
import  { useContext } from 'react';
import UserContext from "../../componentes/Registration/UserContext.jsx"; // Importar el contexto de usuario
import { useAuthStore } from "../../hooks/useAuthStore";
export const PerfilUsuario = () => {
  const { userData, setUserData } = useContext(UserContext); // Obtener los datos del usuario y la función para establecer los datos del contexto
  const [editing, setEditing] = useState(''); // Estado para controlar si se está editando el perfil
  const { editUser, user} =useAuthStore();
  const [firstName, setFirstName]=useState(user.firstName);
  const [lastName, setLastName]=useState(user.lastName);
  const [address, setAddress]=useState(user.address);
  const [phone, setPhone]= useState(user.phone);
  const [service, setService]=useState(user.service_type);
  const [payment, setPayment]=useState(user.type_of_payment);
  const handleModificarPersonalData = () => {
    // Cambiar el estado de "editing" a true para habilitar la edición del perfil
    setEditing('Personal');
  };
  const handleModificarService=()=>{
    setEditing('service');
  }
  const handleSaveChangesPersonalData = () => {
    // lógica para guardar los cambios en los datos del usuario
    const combinedValues={
      _id: user._id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      address:userData.address,
      rol:user.rol,
      city: user.city,
      service_type: user.service_type,
      type_of_payment: user.type_of_payment,
      
    }; 
    console.log('Guardar cambios', combinedValues);

    editUser(combinedValues); 
    setEditing('');
  };
  const handleSaveChangesService = () => {
    // lógica para guardar los cambios en los datos del usuario
    const combinedValues={
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      address:user.address,
      rol:user.rol,
      city: user.city,
      service_type: userData.service_type,
      type_of_payment: user.type_of_payment,
      
    }; 
    console.log('Guardar cambios', combinedValues);

    editUser(combinedValues); 
    setEditing('');
  };
  const handleModificarPayment=()=>{
    setEditing('payment');
  }
  const handleSaveChangesPayment = () => {
    // lógica para guardar los cambios en los datos del usuario
    const combinedValues={
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      address:user.address,
      rol:user.rol,
      city: user.city,
      service_type: user.service_type,
      type_of_payment: userData.type_of_payment,
      
    }; 
    console.log('Guardar cambios', combinedValues);

    editUser(combinedValues); 
    setEditing('');
  };

  const handleCancelEdit = () => {
    // Cancelar la edición, restaurando los datos originales del usuario y cambiando el estado de "editing" a false
    setEditing('');
  };


  return (
    <>
      <HeaderProvider showMenu={true} />
      <div className="w-full mt-4 flex items-center justify-center ">
      <div className="w-[90%] md:w-[50%]  bg-gradient-to-b
       from-green-200 to-neutral-400 rounded-xl
       flex flex-col justify-center items-center gap-5 p-5">
        
        <div className="px-6 py-4">
          <div className="w-[95%]  text-neutral-900 justify-center text-2xl 
          font-bold font-['Manrope']">{`Hola ${user.firstName} ${user.lastName}`}</div>
          <p className="text-neutral-900 text-base font-semibold font-['Manrope']">
          Mi perfil</p>
        </div>

        <div className="w-[80%]  bg-gray-50 rounded-xl">
          <div className="px-6 pt-4 pb-2">
          <div className="text-neutral-900 
          text-base font-medium font-['Manrope']">Datos personales
          </div>
          {/* Campos para el nombre */}
           <div className="flex items-center justify-between">
            <span className="text-neutral-900 text-base font-normal font-['Manrope'] 1px">Nombre</span>
            {editing=='Personal' ? (
              <input
                type="text"
                className="text-gray-600 text-sm border-b border-gray-500"
                value={firstName}
                onChange={(e) => {setFirstName(e.target.value);
                setUserData({ ...userData, firstName: e.target.value })}}
              />
            ) : (
              <span className="text-gray-600 text-sm">{`${userData.firstName}`}</span>
            )}
          </div>

          {/* Campos para el apellido */}
          <div className="flex items-center justify-between">
            <span className="text-neutral-900 text-base font-normal font-['Manrope']">Apellido</span>
            {editing=='Personal' ? (
              <input
                type="text"
                className="text-gray-600 text-sm border-b border-gray-500"
                value={lastName}
                onChange={(e) =>{
                  setLastName(e.target.value);
                setUserData({ ...userData, lastName: e.target.value })}}
              />
            ) : (
              <span className="text-gray-600 text-sm">{`${userData.lastName}`}</span>
            )}
          </div>

          {/* Campos para el email */}
          <div className="flex items-center justify-between">
            <span className="text-neutral-900 text-base font-normal font-['Manrope']">Dirección</span>
            {editing=='Personal' ? (
              <input
                type="text"
                className="text-gray-600 text-sm border-b border-gray-500"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setUserData({ ...userData, address: e.target.value })}
                  }
              />
            ) : (
              <span className="text-gray-600 text-sm">{`${userData.address}`}</span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-neutral-900 text-base font-normal font-['Manrope']">Teléfono</span>
            {editing=='Personal' ? (
              <input
                type="tel"
                className="text-gray-600 text-sm border-b border-gray-500"
                value={phone}
                placeholder={user.phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                  setUserData({ ...userData, phone: e.target.value })
                  }
                  }
              />
            ) : (
              <span className="text-gray-600 text-sm">{`${userData.phone}`}</span>
            )}
          </div>
          {/* Agrega los campos restantes para los datos del usuario con una lógica similar */}
          <div className="flex justify-end mt-4">
            {editing=='Personal' ? (
              <>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleSaveChangesPersonalData} // Guardar los cambios
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
                onClick={handleModificarPersonalData} // Habilitar la edición
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
            {editing=='service' ? (
              <input
                type="text"
                className="text-gray-600 text-sm border-b border-gray-500"
                value={service}
                onChange={(e) => {
                  setService(e.target.value)
                  setUserData({ ...userData, service_type: e.target.value })}}

              />
            ) : (
              <span className="text-gray-600 text-sm">{`${userData.service_type}`}</span>
            )}
          </div>

          <div className="flex justify-end mt-4">
            {editing=='service' ? (
              <>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleSaveChangesService} // Guardar los cambios
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
                onClick={handleModificarService} // Habilitar la edición
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
            {editing=='payment' ? (
              <input
                type="text"
                className="text-gray-600 text-sm border-b border-gray-500"
                value={payment}
                onChange={(e) => {
                  setPayment(e.target.value);
                  setUserData({ ...userData, type_of_payment: e.target.value })}}
              />
            ) : (
              <span className="text-gray-600 text-sm">{`${userData.type_of_payment}`}</span>
            )}
          </div>

          <div className="flex justify-end mt-4">
            {editing=='payment' ? (
              <>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleSaveChangesPayment} // Guardar los cambios
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
                onClick={handleModificarPayment} // Habilitar la edición
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
