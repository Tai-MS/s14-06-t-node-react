import { useSetAtom } from "jotai";
import { Link, useLocation } from "react-router-dom";
import { mobileMenuAtom } from "../../atoms/atoms.js";
import { useEffect } from "react";
import { LoginButton } from "../share/LoginButtom.jsx";
import { RegisterButton } from "../share/RegisterButton.jsx";

export const MenuLanding = () => {
  const location = useLocation();
  const setShowMobileMenu = useSetAtom(mobileMenuAtom);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setShowMobileMenu(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-y-7 px-4 py-12 h-96"
        style={{
          background:
            "linear-gradient(179.92deg, #BCF5CC 0.07%, #86B282 101.12%)",
        }}
      >
        
        <LoginButton to="/acceso">Iniciar sesión</LoginButton>

        <RegisterButton to="/registro">Registrarme</RegisterButton>
        

        <div />
      </div>
    </>
  );
};
