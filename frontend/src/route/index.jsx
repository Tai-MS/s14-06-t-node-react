import React from 'react';
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import NoAuthRouter from "./NoAuthRouter.jsx";
import AuthRouter from "./AuthRouter.jsx";
//import { useIsAuthenticated } from "../hooks/auth";

export default function Navigation() {
  /*const isAuth = useIsAuthenticated();*/

  return (
    <Suspense fallback={<p>cargando...</p>}>
        
     <BrowserRouter>
      
        {<NoAuthRouter />}
        {<AuthRouter />}
      </BrowserRouter> 
    </Suspense>
  );
}
