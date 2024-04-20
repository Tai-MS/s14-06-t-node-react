import { SearchCard } from "../../componentes/search/SearchCard";
import { HeaderClient } from "../../componentes/share/HeaderClient";
import { useLocation } from 'react-router-dom';

export const SearchPage = () => {
  const location = useLocation();
  const servicios = location.state?.servicio; // servicios es un array de objetos

  console.log('Los servicios recibidos son:', servicios);

  return (
    <>
      <HeaderClient showMenu={true} />
      
      <div className=" text-2xl font-semibold text-customGreen mt-3 ml-3">Solicitar Emplead@</div>
      <span className="font-semibold mt-2 ml-5">{servicios[0].category.name}</span>
      {/* Mapear cada servicio para renderizar una SearchCard por cada uno */}
      {servicios.map((servicio, index) => (
        <SearchCard key={index} servicio={servicio} />
      ))}
    </>
  );
};
