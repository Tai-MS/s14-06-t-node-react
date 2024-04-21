import FormRegister from "../../componentes/Registration/Register";
import { HeaderLanding } from "../../componentes/landing/HeaderLanding";



export const Register = () => {
    return (
      <>
    <HeaderLanding showMenu={false}/>
    <FormRegister/>
</>
  );
};
