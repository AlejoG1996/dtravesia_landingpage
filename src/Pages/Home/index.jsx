//componentes
import Header from "../Components/Header";
import MenuProducts from "../Components/MenuProducts";

//react
import { useState } from 'react';

//estilos
import './home.css'
function Home() {

  return (
    <>
      {/* Header - Cabecera */}
      <div className="relative w-full h-[700px] bg-[#fff]">
        <div className="w-full h-full bg-slate-600" id="Header">
        </div>
        <div className="absolute top-0 left-0 w-full h-[700px]">
          <Header></Header>
        </div>
      </div>

      {/**Menu*/}
      <div className="w-full h-[700px] Z-200">
        <MenuProducts />
      </div>




    </>





  )
}

export default Home
