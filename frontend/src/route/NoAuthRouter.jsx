import { Route, Routes } from "react-router-dom";
import { Landing } from "../pages/landing/Landing.jsx";
import { Login } from "../pages/auth/Login.jsx";
import { NotFound } from "../pages/NotFound.jsx";
import { Register } from "../pages/auth/Register.jsx";

// import { NotFound } from "../pages/not-found/NotFound";

export default function NoAuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/acceso" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/*" element={<NotFound />} /> 
    </Routes>
  );
}
