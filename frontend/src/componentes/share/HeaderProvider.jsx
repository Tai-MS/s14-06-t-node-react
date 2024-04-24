import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { mobileMenuAtom } from "../../atoms/atoms.js";
import clsx from "clsx";
import { MenuProvider } from "./MenuProvider.jsx";


export const HeaderProvider = ({ showMenu }) => {
  const [showMobileMenu, setShowMobileMenu] = useAtom(mobileMenuAtom);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="p-4 flex justify-between bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between w-[90%]">
        <div className="flex items-center">
          <Link to="/" className="mr-4">
            <img src="/images/logoSH.svg" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <Link to="/">
            <img src="/images/logotype.svg" alt="logo" className="mt-3" />
          </Link>
        </div>
      </div>

      {showMenu && (
        <>
          <nav
            className={clsx(
              "fixed flex flex-col backdrop-blur-[1.8px] w-full h-full top-[78px] transition-all duration-500 z-30",
              showMobileMenu ? "right-0" : "-right-full"
            )}
          >
            <MenuProvider/>
          </nav>

          <button type="button" onClick={toggleMenu}>
            {showMobileMenu ? (
              <img src="/images/burgerClose.svg" alt="icon-close" />
            ) : (
              <img src="./images/burger.svg" alt="icon-burguer" />
            )}
          </button>
        </>
      )}
    </div>
  );
};
