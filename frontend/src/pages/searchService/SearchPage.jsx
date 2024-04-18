import { SearchCard } from "../../componentes/search/SearchCard";
import { HeaderClient } from "../../componentes/share/HeaderClient";
import { useLocation } from 'react-router-dom';


export const SearchPage = () => {
  const location = useLocation();
  const servicio = location.state?.servicio;

  console.log('El servicio recibido es:', servicio);
  return (
    <>
      <HeaderClient showMenu={true} />

      <SearchCard/>
    </>
  );
};
