import { HeaderLanding } from "../../componentes/landing/HeaderLanding";
import { IdRegisterButton } from "../../componentes/landing/IdRegisterButton";

export const Landing = () => {
  return (
    <>
      <HeaderLanding showMenu={true} />
      <div className="px-1">
        <div className="relative">
          <img
            src="/images/landingPhoto.svg"
            alt="Landing Image"
            className="w-full"
          />

          <div className=" flex items-center justify-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] bg-green-200 bg-opacity-50">
            Cada rincón de tu hogar merece atención especializada, encontrá lo
            que necesitas en ServiHogar
          </div>
        </div>

        <div className="mt-4 flex justify-center ">
          <img src="/images/buscadorProv.svg" alt="" />
        </div>
        <div className="mt-8">
          <p className="text-left">
            Forma parte del equipo de profesionales de ServiHogar. Vos elegís
            que días y horarios podes brindar tus servicios ¡Inscríbete gratis
            en nuestra página y comienza a trabajar !
          </p>
        </div>
        <div className="mt-4">
          <IdRegisterButton />
        </div>

        <div className="mt-8">
          <h2 className="font-bold">Preguntas frecuentes</h2>
          <div className="mt-4">
            <img src="/images/quetions/q1.svg" alt="1" />
            <img src="/images/quetions/q2.svg" alt="2" />
            <img src="/images/quetions/q3.svg" alt="3" />
            <img src="/images/quetions/q4.svg" alt="4" />
            <img src="/images/quetions/q5.svg" alt="5" />
          </div>
        </div>

        <div className="mt-8">
          <img src="/images/quetions/footer.svg" alt="" />
        </div>
      </div>
    </>
  );
};
