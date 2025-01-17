//react
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//iconos
import { RiSearch2Line } from "react-icons/ri";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";




const Carousel = () => {
    const swiperRef = useRef(null);

    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev(); // Accedemos a la instancia de swiper
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext(); // Accedemos a la instancia de swiper
        }
    };

    return (
        <>
            <div className="py-2 px-4 mb-0 md:px-16 w-full">
                <div className=" w-full md:w-[400px] relative">
                    <RiSearch2Line className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        className="bg-gray-50 py-[9px] pl-[50px] pr-4 rounded-lg text-gray-500 outline-none w-full text-xl
                            hover:bg-gray-100 transition-all ease-in-out"
                        placeholder="Buscar">
                    </input>
                </div>
            </div>
            <div className="py-2 px-4 md:px-16 w-full relative h-auto pt-0 mp-0">
                {/* Botón flotante de "Previous" */}
                <button
                    className="absolute top-[60px] left-3 md:left-12 transform -translate-y-1/2 bg-[rgba(0,0,0,0.5)] hover:bg-primary text-white font-bold pl-1 rounded-full z-10 h-10 w-10 text-3xl text-center"
                    onClick={handlePrevClick}
                >
                    <MdArrowBackIosNew />
                </button>

                {/* Botón flotante de "Next" */}
                <button
                    className="absolute top-[60px] right-3 md:right-12 transform -translate-y-1/2 bg-[rgba(0,0,0,0.5)] hover:bg-primary text-white font-bold pl-2 rounded-full z-10 h-10 w-10 text-3xl text-center"
                    onClick={handleNextClick}
                >
                    <MdArrowForwardIos />
                </button>

                <Swiper
                    ref={swiperRef}
                    slidesPerView={2}
                    spaceBetween={20}
                    pagination={{
                        clickable: true, // Hace que los puntos de la paginación sean clickeables
                        el: '.swiper-pagination', // Especificamos el contenedor donde se renderizará la paginación
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        '@1.50': {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper overflow-visible"
                >
                    <SwiperSlide className=' bg-[#2E8B57]  shadow-lg custom-slide rounded-lg flex flex-col justify-between hover:bg-[#277C49] transition-colors duration-500 ease-linear'>
                        <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-transform duration-500 ease-linear">
                            <i className="fa-solid fa-list-check text-4xl text-white"></i>
                            <h3 className="text-center mt-2 mb-2 font-semibold text-white">Todo</h3>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-gray-50 shadow-lg custom-slide rounded-lg flex flex-col justify-between  hover:bg-gray-100 transition-all ease-in-out duration-500'>
                        <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                            <i className="fa-solid fa-egg text-4xl text-gray-600"></i>
                            <h3 className="text-center mt-2 mb-2 font-semibold text-gray-600">Desayunos</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-gray-50 shadow-lg custom-slide rounded-lg flex flex-col justify-between  hover:bg-gray-100 transition-all ease-in-out duration-500'>
                        <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                            <i className="fa-solid fa-drumstick-bite text-4xl text-gray-600"></i>
                            <h3 className="text-center mt-2 mb-2 font-semibold text-gray-600">Almuerzos</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-gray-50 shadow-lg custom-slide rounded-lg flex flex-col justify-between  hover:bg-gray-100 transition-all ease-in-out duration-500'>
                        <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                            <i className="fa-solid fa-stroopwafel text-4xl text-gray-600"></i>
                            <h3 className="text-center mt-2 mb-2 font-semibold text-gray-600">Entradas</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-gray-50 shadow-lg custom-slide rounded-lg flex flex-col justify-between  hover:bg-gray-100 transition-all ease-in-out duration-500'>
                        <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                            <i className="fa-solid fa-fire text-4xl text-gray-600"></i>
                            <h3 className="text-center mt-2 mb-2 font-semibold text-gray-600">Parrila y Ahumado</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-gray-50 shadow-lg custom-slide rounded-lg flex flex-col justify-between  hover:bg-gray-100 transition-all ease-in-out duration-500'>
                        <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                            <i className="fa-solid fa-people-carry-box text-4xl text-gray-600"></i>
                            <h3 className="text-center mt-2 mb-2 font-semibold text-gray-600">Para compartir</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-gray-50 shadow-lg custom-slide rounded-lg flex flex-col justify-between  hover:bg-gray-100 transition-all ease-in-out duration-500'>
                        <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                            <i className="fa-solid fa-wine-glass text-4xl text-gray-600"></i>
                            <h3 className="text-center mt-2 mb-2 font-semibold text-gray-600">Bebidas</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-gray-50 shadow-lg custom-slide rounded-lg flex flex-col justify-between  hover:bg-gray-100 transition-all ease-in-out duration-500'>
                        <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                            <i className="fa-solid fa-martini-glass-citrus text-4xl text-gray-600"></i>
                            <h3 className="text-center mt-2 mb-2 font-semibold text-gray-600">Cocteles</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-gray-50 shadow-lg custom-slide rounded-lg flex flex-col justify-between  hover:bg-gray-100 transition-all ease-in-out duration-500'>
                        <div className="rounded-lg p-4 text-center flex-grow hover:scale-105 transition-all ease-in-out duration-500">
                            <i className="fa-solid fa-tags text-4xl text-gray-600"></i>
                            <h3 className="text-center mt-2 mb-2 font-semibold text-gray-600">Promos</h3>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* Paginación debajo del Swiper */}
                <div className="swiper-pagination mt-[10px]" />
            </div>
        </>
    );
};

export default Carousel;
