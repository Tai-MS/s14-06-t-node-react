import React from "react";
import { Link } from "react-router-dom";

export const LoginButton = ({ to, onSubmit, children }) => {
  return to ? (
    // Si se proporciona 'to', renderiza como un Link
    <Link
      to={to}
      className="bg-customGreen hover:bg-green-600 text-black font-semibold w-[75%] py-3 px-4 shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center rounded-full"
    >
     {children}
    </Link>
  ) : onSubmit ? (
    // Si se proporciona 'onSubmit', renderiza como un botón de submit
    <button
      type="submit"
      className="bg-customGreen hover:bg-green-600 text-black font-semibold w-[75%] py-3 px-4 shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center rounded-full"
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
