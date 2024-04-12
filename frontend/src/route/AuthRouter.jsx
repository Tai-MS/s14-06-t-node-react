import { Route, Routes } from "react-router-dom";
import { HomeClient } from "../componentes/homeUser/HomerClient.jsx";

export default function AuthRouter() {
  return (
    <Routes>
      {/* HOME CLIENT */}
      <Route path="/homeclient" element={<HomeClient />} />  
    </Routes>
  );
}
