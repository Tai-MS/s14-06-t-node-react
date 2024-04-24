import { Suspense } from "react";
import { Route, Routes} from "react-router-dom";
import NoAuthRouter from "./NoAuthRouter.jsx";
import AuthRouter from "./AuthRouter.jsx";
import { useAuthStore } from "../hooks/useAuthStore.js";
import { useEffect } from "react";
export default function Navigation() {
  /*const isAuth = useIsAuthenticated();*/

  const { status, checkAuthToken } = useAuthStore();

 
  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <Suspense fallback={<p>cargando...</p>}>
        
     <Routes>
      
        {status==='authenticated'? 
        <Route path="/*" element={<AuthRouter />} />: <Route path="/*" element={<NoAuthRouter />} />}
      </Routes> 
    </Suspense>
  );
}
