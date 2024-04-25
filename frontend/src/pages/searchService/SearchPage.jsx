import { SearchCard } from "../../componentes/search/SearchCard";
import { HeaderClient } from "../../componentes/share/HeaderClient";
import { useLocation } from 'react-router-dom';

export const SearchPage = () => {
  const location = useLocation();
  const servicios = location.state; // servicios es un objeto que contiene un array llamado 'servicio'

  console.log('Los servicios recibidos son:', servicios);

  // Verifica que servicios esté definido y que 'servicio' sea un array antes de acceder a la propiedad 'category'
  const primeraCategoria = servicios && servicios.servicio && servicios.servicio.length > 0 ? servicios.servicio[0].category : '';

  return (
    <>
      <HeaderClient showMenu={true} />
      
      <div className="text-2xl font-semibold text-customGreen mt-3 ml-3">Solicitar Emplead@</div>
      
      {/* Mostrar la primera categoría encontrada */}
      {primeraCategoria && (
        <span className="font-semibold mt-2 ml-5">{primeraCategoria}</span>
      )}

      {/* Mapear cada servicio para renderizar una SearchCard por cada uno */}
      {servicios && servicios.servicio && servicios.servicio.map((servicio, index) => (
        <SearchCard key={index} servicio={servicio} />
      ))}
    </>
  );
};
