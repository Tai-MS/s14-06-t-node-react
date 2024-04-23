import { useSetAtom } from "jotai";
import { useLocation } from "react-router-dom";
import { mobileMenuAtom } from "../../atoms/atoms.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore.js";
import chatIcon from "/images/chatIcon.svg";
export const MenuProvider = () => {

  const navigateTo =useNavigate();
  const location = useLocation();
  const setShowMobileMenu = useSetAtom(mobileMenuAtom);
  const { user, handleLogout }=useAuthStore() 
  
  const goToHistory =()=>{
    navigateTo('/historial-provider');
  }
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setShowMobileMenu(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <div
        className="flex flex-col gap-y-7 px-4 py-2 h-90"
        style={{
          background:
            "linear-gradient(179.92deg, #BCF5CC 0.07%, #86B282 101.12%)",
        }}
      >
        <h2 className="font-semibold text-2xl mb-2 mt-1 text-center"> {`${user.firstName} ${user.lastName}`}</h2>

       

        <div className="flex space-x-2 justify-start cursor-pointer hover:text-[#383f38]">
          <img
            src="/images/notificationIcon.svg"
            alt="Notification Icon"
            className="h-6 w-6"
          />
          <span className="text-sm font-semibold text-base">Notificaciones</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-[#383f38]">
          <img
            src="/images/mydataIcon.svg"
            alt="My data Icon"
            className="h-6 w-6"
          />
          <span className="text-sm font-semibold text-base">Mis datos</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-[#383f38]" onClick={goToHistory}>
          <img
            src="/images/transactionLogIcon.svg"
            alt="My transations Icon"
            className="h-6 w-6"
          />
          <span className="text-sm font-semibold text-base">Historial contrataciones</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-[#383f38]">
          <img
            src={chatIcon}
            alt="Chat Icon"
            className="h-6 w-6"
          />
          <span className="text-sm font-semibold text-base ">Chat</span>
        </div>

        <div className="flex items-center space-x-2 mt-10 cursor-pointer hover:text-[#383f38]">
          <img
            src="/images/HelpIcon.svg"
            alt="Ayuda Icon"
            className="h-6 w-6"
          />
          <span className="text-sm font-semibold text-base">Ayuda</span>
        </div>

        <div className="flex items-center space-x-2 hover:text-[#383f38]" onClick={handleLogout}>
          <img
            src="/images/closeSessionIcon.svg"
            alt="Cerrar sesión Icon"
            className="h-6 w-6"
          />
          <span className="text-sm font-semibold text-base cursor-pointer">Cerrar sesión</span>
        </div>

    



        <div />
      </div>
    </>
  );
};
