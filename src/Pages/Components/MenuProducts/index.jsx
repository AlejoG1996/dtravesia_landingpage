//componenttes
import Categories from "./categories";
import Products from "./products";

const MenuProducts = () => {
    return (
        <>
            {/* Titulo */}
            <div className="pt-[70px] md:pt-[100px]">
                <div className="py-4 px-6 md:px-16 text-left text-5xl font-bold uppercase text-gray-500">NUESTRO MENÚ</div>
            </div>

            {/*categories*/}
            <Categories />

            {/* Productos */}
            <Products></Products>

            <footer class=" ts-footer ">
                <img src="https://raw.githubusercontent.com/AlejoG1996/dtravesia_landingpage/refs/heads/gh-pages/foot_bg.png" 
                className="w-full"></img>
                <div class="h-[200px]">
                    <div class="footer-logo-area text-center">
                        <a class="footer-logo" href="#">
                            CONTACTO
                        </a>
                    </div>

                    </div>
            </footer>
        </>
    )
};
export default MenuProducts;