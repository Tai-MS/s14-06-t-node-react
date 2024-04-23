import React, { useState, useEffect } from "react";
import { HeaderClient } from "../../componentes/share/HeaderClient";
import { FooterContact } from "../../componentes/share/FooterContact";
import { useAuthStore } from "../../hooks/useAuthStore.js";
import { ClientHistorialCard } from "../../componentes/ClientHistorial/ClientHistorialCard.jsx";
import { fetchClientHistorial } from "../../servicios/ClientHistorialAxio.js";

export const ClientHistorial = () => {
  const { user } = useAuthStore();
  const [historialData, setHistorialData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchClientHistorial(user._id);
        setHistorialData(data);
      } catch (error) {
        console.error("Error al obtener el historial:", error);
      }
    };

    fetchData();
  }, [user._id]);

  console.log("Historial Data:", historialData.adquired_services);

  return (
    <>
      <HeaderClient showMenu={true} />

      <div className="p-4 flex justify-center items-center ">
        <div className="w-[350px] h-full rounded-xl shadow bg-gradient-to-b from-[#BCF5CC] to-[#86B282]">
          <h2 className="font-semibold text-2xl mb-3 mt-1 text-center">{`¡Hola ${user.firstName}!`}</h2>
          <div className="ml-4 mt-4 text-black font-semibold">
            Historial contrataciones
          </div>

          {historialData.adquired_services &&
            historialData.adquired_services.length > 0 &&
            historialData.adquired_services.map((service, index) => (
              <ClientHistorialCard
                key={index}
                proveedoresContratado={service}
              />
            ))}
        </div>
      </div>
      <FooterContact />
    </>
  );
};
