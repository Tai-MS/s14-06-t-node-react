export const CardHistoryProvider = ({ service }) => {
  const { title, description, category } = service;
  return (
    <div className="bg-[#FAFFFB] w-[95%] p-4 mx-2 my-2 rounded-xl leading-8 md:w-[30%]">
      <p>{title}</p>
      <p>
        <span className="font-semibold text-[1rem]">Descripción: </span> {description}
      </p>
      <p>
        <span className="font-semibold text-[1rem]">Categoría de servicio: </span>
        {category}
      </p>
      
      <p>
        <span className="font-semibold text-[1rem]">
          Valor total del servicio: 
        </span>
        Por acordar.
      </p>
      <div className="w-full flex justify-end mt-5">
        <button
          className="bg-[#84be80] rounded-[20px] w-[50%] h-auto p-2 hover:bg-[#7dc577] 
            hover:text-[#363836] "
        >
          Cancelar contrato
        </button>
      </div>
    </div>
  );
};
