import { Route, Routes } from "react-router-dom";
import { HomeClient } from "../componentes/homeUser/HomeClient.jsx";
import { SearchPage } from "../pages/searchService/SearchPage.jsx";
import { NotFound } from "../pages/NotFound.jsx";
import { ServiceCorfirm } from "../pages/searchService/ServiceCorfirm.jsx";
import { ClientHistorial } from "../pages/ClientHistory/ClientHistory.jsx";
export default function AuthRouter() {

  
  return (
    <Routes>
      {/* HOME CLIENT */}
      <Route path="/homeclient" element={<HomeClient />} />  
      <Route path='/resultados-servicio' element={<SearchPage />} />
      <Route path='/empleado-confirmado' element={<ServiceCorfirm />} />
      <Route path="/*" element={<NotFound />} /> 
      <Route path='/empleado-historial' element={<ClientHistorial />} />
    </Routes>
  );
}
