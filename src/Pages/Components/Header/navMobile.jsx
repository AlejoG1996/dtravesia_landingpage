//react
import React from "react";

//iconos
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { MdOutlineRestaurant } from "react-icons/md";
import { RiSmartphoneFill } from "react-icons/ri";

const NavMobile = (props) => {
    const { showMenu, toggleMenu } = props;
    return (
        <>
            <div className={`fixed right-0 top-0 w-[200px] h-full flex flex-col justify-between 
                     py-6 rounded-tl-xl rounded-bl-xl z-50 transition-transform transform lg:hidden
                     ${showMenu ? "translate-x-0" : "translate-x-full"}`}
                id="Navmobile">
                <div className="lg:hidden text-white z-50 absolute  right-8 items-center gap-4">
                    <button onClick={toggleMenu} className="text-4xl z-50 p-2">
                        {showMenu ? <RiCloseLine /> : <CiMenuFries />}
                    </button>
                </div>
                <div className="flex flex-col justify-between h-full">
                    <ul className="pt-14 text-white text-2xl">
                        <li className="p-4 pl-8 flex items-center gap-2 hover:border-b-[1px] ml-4 mr-4 mb-2 border-b-[1px] hover:shadow-2xl">
                            <IoHome />
                            <a href="#">Inicio</a>
                        </li>
                        <li className="p-4 pl-8 flex items-center gap-2 hover:border-b-[1px] ml-4 mr-4  mb-2 hover:shadow-2xl">
                            <MdOutlineRestaurant />
                            <a href="#">Menú</a>
                        </li>
                        <li className="p-4 pl-8 flex items-center gap-2 hover:border-b-[1px] ml-4 mr-4  mb-2 hover:shadow-2xl">
                            <RiSmartphoneFill />
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                    <button className="p-2  text-white rounded-lg ml-8 mr-8 border-[1px] hover:bg-primary hover: border-primary transition-all">
                        Iniciar sesión
                    </button>
                </div>

            </div>
        </>
    )
};
export default NavMobile;