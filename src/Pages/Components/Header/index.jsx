
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
      description: "Nuestros almuerzos caseros están inspirados en la tradición gastronómica de nuestra tierra, con un toque auténtico que hace de cada platillo una experiencia única. Preparados con ingredientes frescos y de calidad, nuestros almuerzos son ideales para quienes buscan un sabor reconfortante y lleno de calidez, perfecto para compartir en buena compañía.",
      imgSrc: "https://raw.githubusercontent.com/AlejoG1996/dtravesia_landingpage/refs/heads/gh-pages/almuerzo.png"
    },
    {
      title: "PARRILLA",
      description: "Nuestros asados y cortes de carne ahumados son una verdadera celebración del sabor. Cada pieza es cuidadosamente seleccionada y cocinada a la perfección, con técnicas tradicionales de ahumado que realzan su jugosidad y sabor. Ya sea que disfrutes de una carne tierna y sabrosa o de un asado perfectamente dorado, cada bocado te transportará a un mundo de sabores intensos y auténticos",
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