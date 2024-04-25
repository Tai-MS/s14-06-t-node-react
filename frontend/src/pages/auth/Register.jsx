import FormRegister from "../../componentes/Registration/Register";
import { RegisterProvider } from "../../componentes/Registration/RegisterProvider";
import { HeaderLanding } from "../../componentes/landing/HeaderLanding";
import { UserProvider } from "../../componentes/Registration/UserContext";



export const Register = () => {
    return (
      <>
        <HeaderLanding showMenu={false}/>
        <FormRegister/>
    
</>
  );
};
