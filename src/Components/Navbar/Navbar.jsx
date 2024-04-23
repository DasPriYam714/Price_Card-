import { useState } from "react";
import Route from "./Route";
import { RiMenu2Fill, RiMenuFoldLine  } from "react-icons/ri";


const Navbar = () => {

    const [open, setOpen]= useState(false)

    const routes =[
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/products", name: "Products" },
        { id: 5, path: "/contact", name: "Contact" }
      ];
       
    return (
        <div >
            <div className="md:hidden text-2xl" onClick={ () => setOpen(!open)}>
            {
                open === true ? <RiMenuFoldLine ></RiMenuFoldLine> : <RiMenu2Fill ></RiMenu2Fill>
            }
            

            </div>
            
            <ul className="md:flex">
            {
                routes.map(route => <Route key={route.id} route={route}></Route>)
            }
            </ul>
            
        </div>
    );
};

export default Navbar;