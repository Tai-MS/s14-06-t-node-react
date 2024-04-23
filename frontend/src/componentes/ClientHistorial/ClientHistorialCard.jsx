
import React from 'react';
import { LoginButton } from '../share/LoginButtom';

export const ClientHistorialCard = ({ proveedoresContratado }) => {
  const { category, createdAt, title } = proveedoresContratado;
console.log(proveedoresContratado)
  return (
    <div className="py-2 px-2">
      <div className="w-[324px] h-58 bg-[#FAFFFB] rounded-xl shadow-lg border flex flex-col">
        <div className="flex items-center mb-1 mt-4">
          <img
            className="w-12 h-12 rounded-full ml-4"
            src="/images/userPhoto.svg"
            alt="User Photo"
          />
          <div className="ml-3">
            <span className="font-bold">{category}</span>
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <label className="font-semibold ml-5">Día: </label>
          <span id="barrioNombre"> Jueves 17/04</span>
        </div>
        <div className="flex flex-row mt-2">
          <label className="font-semibold ml-5">Hora de inicio: </label>
          <span id="barrioNombre"> 10 hs</span>
        </div>
        <div className="flex flex-row mt-2">
          <label className="font-semibold ml-5">Tarifa por hora: </label>
          <span id="barrioNombre"> $3.000</span>
        </div>

        <div className="w-[100%] flex justify-end mt-3 mb-2 p-2">
          <LoginButton to="*" width="w-45%">
            Cancelar Pedido
          </LoginButton>
        </div>
      </div>
    </div>
  );
};
