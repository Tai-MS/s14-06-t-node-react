import { SearchCard } from "../../componentes/search/SearchCard";
import { HeaderClient } from "../../componentes/share/HeaderClient";


export const SearchPage = () => {
  return (
    <>
      <HeaderClient showMenu={true} />

      <SearchCard/>
    </>
  );
};
