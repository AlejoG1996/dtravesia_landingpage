//react
import React from "react";
import { useState, useEffect } from "react";

//iconos
import { GiShoppingCart } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLine } from "react-icons/ri";

const Nav = (props) => {
  const { showMenu, toggleMenu } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Si la página se ha desplazado hacia abajo
      } else {
        setIsScrolled(false); // Si está en la parte superior
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`fixed w-full z-50 top-0 start-0 transition-all duration-300
          ${isScrolled ? "bg-white shadow-lg" : "bg-transparent shadow-none"}`}>
        <div className="flex justify-between items-center py-4 px-6 md:px-16">

          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <img src="https://raw.githubusercontent.com/AlejoG1996/dtravesia_landingpage/refs/heads/gh-pages/logo_icono.png" class="h-14" alt="Logo" />
            <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-[#c19d68] text-[#c19d68]">D'TRAVESIA</span>
          </div>

          {/* menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6 text-black">
              <li><a href="#" className="inline-block py-1 px-3 hover:text-[#59a13f] font-semibold text-[#59a13f]">Inicio</a></li>
              <li><a href="#" className="inline-block py-1 px-3 hover:text-[#59a13f]   font-semibold">Menú</a></li>
              <li><a href="#" className="inline-block py-1 px-3 hover:text-[#59a13f] font-semibold">Contacto</a></li>
            </ul>
          </div>

          {/* icons section */}
          <div className="items-center gap-4 text-white hidden lg:flex">
            <button className={`relative fixed  font-semibold  rounded-full hover:bg-primary hover:text-white
                               border-primary px-6 py-2 duration-200 hidden md:block text-4xl
                                ${isScrolled ? "text-black" : "text-white"}`}>
              <GiShoppingCart />
              <span className={`absolute top-0 right-0 bg-secondary text-xs rounded-full w-6 h-6 
                              flex items-center justify-center `}>
                0
              </span>
            </button>

            <button className={` font-semibold rounded-md border-[#2E8B57] px-6 py-2 duration-300 hidden 
                                md:block transition-colors  ease-linear
                                ${isScrolled ? "text-white hover:text-white bg-[#2E8B57] hover:bg-[#277C49] " :
                "text-white hover:bg-primary "}`}>
              Iniciar sesión
            </button>
          </div>

          {/* mobile hamburguer menu section */}
          <div className={`lg:hidden z-50 absolute  right-8 items-center gap-4 
                    ${isScrolled ? "text-black" : "text-white"}`}>
            <button onClick={toggleMenu} className="text-4xl z-50 p-2">
              {showMenu ? <RiCloseLine /> : <CiMenuFries />}
            </button>
          </div>

        </div>
      </nav>

    </>
  )
};
export default Nav;