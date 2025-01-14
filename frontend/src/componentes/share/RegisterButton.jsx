import { useNavigate } from "react-router-dom";
export const RegisterButton = ({ to, onSubmit, children }) => {
  const navigateTo =useNavigate();

  return to ? (
    // Si se proporciona 'to', renderiza como un Link
    <button
      onClick={()=>navigateTo(to)}
      className="bg-transparent hover:bg-green-600 text-black font-semibold w-[75%] py-3 px-4 shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center rounded-full border-2 border-customGreen"
    >
          {children}
    </button>
  ) : onSubmit ? (
    // Si se proporciona 'onSubmit', renderiza como un botón de submit
    <button
      type="submit"
      className="bg-transparent hover:bg-green-600 text-black font-semibold w-[75%] py-3 px-4 shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center rounded-full border-2 border-customGreen"
      onClick={onSubmit}
    >
      {children}
    </button>
  ) : (
    // Si no se proporciona ni 'to' ni 'onSubmit', muestra un error
    <div className="text-red-500">
      Error: LoginButton debe recibir 'to' o 'onSubmit'.
    </div>
  );
};
