import { FooterContact } from "../../componentes/share/FooterContact";
import { HeaderProvider } from "../../componentes/share/HeaderProvider";
import { useAuthStore } from "../../hooks/useAuthStore";
import "./provider.css";
import { useState, useEffect } from "react";
import { fetchProviderHistorial } from "../../servicios/providerHistory";
import { CardHistoryProvider } from "../../componentes/historyProvider/CardHistoryProvider";
export const HistorialProvider = () => {
  const { user } = useAuthStore();
  const [historial, setHistorial] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProviderHistorial(user._id);
        
        setHistorial(data);
        data.then(()=>{setLoading(true)})
      } catch (error) {
        console.error("Error al obtener el historial:", error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <>
      <HeaderProvider showMenu={true} />
      <section
        className="bg-main-panel my-5 mx-auto w-[95%] h-auto 
            flex flex-col justify-center items-center rounded-xl gap-3
            "
      >
        <div className="w-[95%]">
          <h1 className="text-[2rem] font-bold text-center">
            {`¡Hola, ${user.firstName} ${user.lastName}! `}
          </h1>
          <p className="text-[22px] font-semibold text-left mt-5">
            Historial de contrataciones
          </p>
          <p className="text-[22px] font-semibold text-left mt-5">
            En esta sección verás tus trabajos realizados
          </p>
          <p className="text-[14px] font-normal text-left">
            En esta sección podras ver tus trabajos realizados y calificar a tu
            empleador.{" "}
          </p>
        </div>
        <div className="w-[95%] flex flex-col md:flex md:flex-row md:gap-5 md:justify-center md:flex-wrap">
          {historial.provided_services &&
           !loading? historial.provided_services.length > 0 ? (
            historial.provided_services.map((service) => (
              <CardHistoryProvider key={service._id} service={service} />
            ))
          ) : (
            <h2 className="bg-[white] m-4 rounded-lg text-center w-[95%]">
              No ha brindado servicios aun.
            </h2>
          ): <span className="loaderSpin"></span>}
        </div>
      </section>
      <FooterContact />
    </>
  );
};
