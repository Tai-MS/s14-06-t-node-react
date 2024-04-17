import { Route, Routes } from "react-router-dom";
import { HomeClient } from "../componentes/homeUser/HomerClient.jsx";
import { SearchPage } from "../pages/searchService/SearchPage.jsx";

export default function AuthRouter() {
  return (
    <Routes>
      {/* HOME CLIENT */}
      <Route path="/homeclient" element={<HomeClient />} />  
      <Route path='/resultados-servicio' element={<SearchPage />} />
    </Routes>
  );
}
