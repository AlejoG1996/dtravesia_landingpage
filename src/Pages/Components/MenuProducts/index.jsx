//componenttes
import Categories from "./categories";

const MenuProducts = () => {
    return (
        <>
            {/* Titulo */}
            <div className="pt-[70px] md:pt-[100px]">
                <div className="py-4 px-6 md:px-16 text-left text-5xl font-bold uppercase text-gray-500">NUESTRO MENÚ</div>
            </div>

            {/*categories*/}
            
            <Categories/>
            
            {/* Productos */}
            
        </>
    )
};
export default MenuProducts;