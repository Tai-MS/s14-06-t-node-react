import { HeaderLanding } from "../../componentes/landing/HeaderLanding";
import FormLogin from "../../componentes/login/FormLogin";

export const Login = () => {
  return (
    <>
      <HeaderLanding showMenu={false} />
      <div className="m-4">
      <FormLogin />
      </div>
      
    </>
  );
};
