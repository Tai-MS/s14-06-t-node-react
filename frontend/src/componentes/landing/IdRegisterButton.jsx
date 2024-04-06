import React from 'react';
import { Link } from 'react-router-dom';

export const IdRegisterButton = () => {
  return (
<Link
  to="/registro"
  className="bg-green-200 hover:bg-green-600 rounded-full text-black font-semibold w-max py-3 px-4 shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center"
>
  <span>Quiero Inscribirme</span>
</Link>

  );
};

