
//react
import { useState, useEffect } from "react";
//componentes
import Nav from "./nav";
import NavMobile from "./navMobile";
import Slider from "./slider";
//iconos
import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      title: "DESAYUNOS",
      description: "Nuestros desayunos típicos celebran la rica tradición culinaria de nuestra región. Ofrecemos una variedad de platillos que combinan sabores autóctonos con un toque casero y delicioso, ideales para comenzar el día con energía",
      imgSrc: "https://raw.githubusercontent.com/AlejoG1996/dtravesia_landingpage/refs/heads/gh-pages/desayunos.jpg"
    },
    {
      title: "ALMUERZOS",
      description: "Nuestros almuerzos caseros, inspirados en la tradición local, ofrecen platillos auténticos preparados con ingredientes frescos y de calidad. Son ideales para quienes buscan un sabor reconfortante, perfecto para compartir en buena compañía",
      imgSrc: "https://raw.githubusercontent.com/AlejoG1996/dtravesia_landingpage/refs/heads/gh-pages/almuerzo.png"
    },
    {
      title: "PARRILLA",
      description: "Nuestros asados y cortes de carne ahumados destacan por su sabor intenso, gracias a técnicas tradicionales que realzan su jugosidad y sabor. Cada pieza es seleccionada y cocinada a la perfección para ofrecer una experiencia auténtica y deliciosa.",
      imgSrc: "https://raw.githubusercontent.com/AlejoG1996/dtravesia_landingpage/refs/heads/gh-pages/parrillaahumado.JPG"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 10000); // Cambiar cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>

      {/* menu */}
      <Nav showMenu={showMenu} toggleMenu={toggleMenu}></Nav>

      {/* menu mobile */}
      <NavMobile showMenu={showMenu} toggleMenu={toggleMenu}></NavMobile>

      {/* carrito de compras mobile */}
      <button className={`fixed left-4 bottom-4 p-4 z-40 text-3xl bg-secondary text-white rounded-full shadow-lg hover:bg-[#896a38]
       hover:text-white transition-colors duration-300 ease-in-out lg:hidden ${showMenu ? "left-0" : "-left-full"
        }`}>
        <GiShoppingCart />
        <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
          0
        </span>
      </button>

      {/* texto */}
      <div className="absolute top-[290px] left-[-200px] rotate-90 text-8xl m-0 p-0 text-secondary opacity-[.1]">
        D'TRAVESIA
      </div>

      {/* Carrusel slider*/}
      <Slider items={items} currentIndex={currentIndex}></Slider>


    </>


  )
};
export default Header;