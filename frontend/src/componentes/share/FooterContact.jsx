export const FooterContact = () => {
  return (
    <div className="bg-green-200 w-full h-[211px]">
      <div className="ml-4 mt-2 flex flex-col">
        <a href="#" className="font-bold text-black text-base">
          Nosotros
        </a>
        <a href="#" className="font-bold text-black text-base mt-4">
          Buestros Servicios
        </a>
        <a href="#" className="font-bold text-black text-base mt-4">
          Ayuda
        </a>
        <a href="#" className="font-bold text-black text-base mt-4">
          ¿Necesitas ayuda? Contactanos
        </a>
        <div className="flex flex-row items-center mt-1">
          <span className="font-bold text-black text-base ">Seguinos</span>
          <div className="w-11 h-11 ml-2 bg-customGreen rounded-full flex justify-center items-center">
            <img src="images/xIcon.svg" alt="x icon" />
          </div>
          <div className="w-11 h-11 ml-2 bg-customGreen rounded-full flex justify-center items-center">
            <img src="images/instagramIcon.svg" alt="instagram icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
