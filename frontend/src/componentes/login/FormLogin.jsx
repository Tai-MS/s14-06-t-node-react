import "./formLogin.css";
import { Link } from "react-router-dom";
import { LoginButton } from "../share/LoginButtom";
import closeWindow from "/images/closeWindow.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { startLogin } = useAuthStore();
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      contraseña: "",
    },
    mode: "onChange",
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    startLogin({
      email: data.email,
      contraseña: data.contraseña,
    });
    reset();
  });
  //const { errorMessage, startRegister } = useAuthStore();
  const cerrarWindow = () => {
    history("/");
  };
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&()*+\/?@[\\\]^_{|}]).{8,}$/;

  return (
    <>
      <section
        className="relative w-full h-[90vh] font__form rounded-b-xl 
    background__form flex justify-center items-center"
      >
        <img
          src={closeWindow}
          alt="Cerrar"
          className="absolute top-[3%] right-[3%] cursor-pointer"
          onClick={cerrarWindow}
        />
        <form className=" w-[80%] block mt-4 h-[80%]" method="post">
          <fieldset className="">
            <legend className="text-[1.2rem] font-semibold mb-6 ">
              Iniciar sesión
            </legend>

            <label htmlFor="email" className=" w-full text-[1rem] ">
              Email
              <input
                type="email"
                className="w-full block  h-11 rounded-t-lg border-b-2 border-[#86B282]
          outline-none p-2  md:w-[60%]"
                name="email"
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "El email es obligatorio",
                  },
                  minLength: {
                    value: 5,
                    message: "El email no es válido",
                  },
                  maxLength: {
                    value: 50,
                    message: "El email no es válido",
                  },
                  pattern: {
                    value: emailRegex,
                    message: "El email no es válido",
                  },
                })}
              />
            </label>
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
            <div className=" relative md:w-[60%]">
                <div className="absolute right-[3%] top-[30px] cursor-pointer " 
                onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword?  <IoEyeOffSharp size={30} />: <IoEyeSharp size={30} /> }
                </div>
              <label htmlFor="password" className=" w-max-[500px] text-[1rem] ">
                Contraseña
              </label>
              <input
                  type={showPassword? "text": "password"}
                  name="password"
                  id="password"
                  className="w-full block h-11 rounded-t-lg border-b-2 border-[#86B282]
              outline-none p-2 "
                  {...register("contraseña", {
                    required: {
                      value: true,
                      message: "La contraseña es obligatorio",
                    },
                    //   pattern: {
                    //     value: passwordRegex,
                    //     message: "La contraseña no es válida",
                    //   },
                  })}
                />
              {errors.contraseña && (
                <span className="error-message">
                  {errors.contraseña.message}
                </span>
              )}
            </div>
          </fieldset>
          <div className="w-full md:w-[60%] flex flex-col items-center">
            <Link to="/recover_password" className="w-full mt-2 mb-12">
              Olvidé mi contraseña
            </Link>

            <LoginButton onSubmit={onSubmit} className="w-full">
              Iniciar sesión
            </LoginButton>

            <Link to="/registro" className=" underline text-center mt-10">
              Registrarme
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};
export default FormLogin;
