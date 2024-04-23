import { Route, Routes } from "react-router-dom";
import { HomeClient } from "../componentes/homeUser/HomeClient.jsx";
import { SearchPage } from "../pages/searchService/SearchPage.jsx";
import { NotFound } from "../pages/NotFound.jsx";
import { ServiceCorfirm } from "../pages/searchService/ServiceCorfirm.jsx";
import {ProfileProvider } from "./../pages/provider/ProfileProvider.jsx";
import { HistorialProvider } from "../pages/provider/HistorialProvider.jsx";
export default function AuthRouter({user}) {

  
  return (
    <Routes>
      {/* HOME CLIENT */}
      <Route path="/" element={<HomeClient />}/>
      <Route path="/homeclient" element={<HomeClient />} />  
      <Route path='/resultados-servicio' element={<SearchPage />} />
      <Route path='/empleado-confirmado' element={<ServiceCorfirm />} />
      {/* PROVIDER */}
      <Route path="/home-provider" element={<ProfileProvider />}/>
      <Route path="/historial-provider" element={<HistorialProvider />}/>
      <Route path="/*" element={<NotFound />} /> 
    </Routes>
  );
}
