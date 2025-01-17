//react
import React from "react";
const Slider = (props) => {
    const { items, currentIndex } = props;
    return (
        <>
            <div
                id="default-carousel"
                className="absolute w-full z-20 top-0 start-0 h-full left-0 md:items-center md:justify-center"
                data-carousel="slide"
            >
                <div className="relative h-full overflow-hidden rounded-lg">
                    <div
                        className="flex transition-transform duration-1000 ease-in-out w-full "
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="   flex-shrink-0 w-full h-full flex justify-between pl-24  pr-14 pt-24 flex-col-reverse md:flex-row md:pt-48 "
                                data-carousel-item
                            >
                                {/* Contenido del texto */}
                                <div className="bg-white pb-8 shadow-2xl rounded-b-md w-full md:w-1/2 p-4 flex  md:text-left md:bg-inherit pr-8 md:shadow-none">
                                    <div className="w-full">
                                        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 font-londrina text-secondary break-words">
                                            {item.title}
                                        </h2>
                                        <p className="text-gray-700 text-sm md:text-lg text-justify md:text-gray-700 md:font-normal break-words">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Imagen */}
                                <div className="shadow-2xl md:shadow-none w-full md:w-1/2 flex  md:mb-6">
                                    <img
                                        src={item.imgSrc}
                                        alt={item.title}
                                        className="object-cover rounded-t-md md:rounded-full w-full h-[200px] sm:w-45 sm:h-45 md:w-52 md:h-52 lg:w-72 lg:h-72 shadow-2xl"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <svg className="absolute w-full z-20 pt-[650px] md:pt-[500px] bottom-[-40px] left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,106.7C384,107,480,117,576,133.3C672,149,768,171,864,160C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            </div>

        </>
    )
};
export default Slider;