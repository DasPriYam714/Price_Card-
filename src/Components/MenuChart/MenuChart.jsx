import { useEffect, useState } from "react";
import SetMenu from "./SetMenu";


const MenuChart = () => {
    const[menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('Menu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
        .then (console.log(setMenu))
    }, [])
    return (
        <div>
            <h2>length: {menu.length}</h2>

           <div className=" md:grid grid-cols-3 gap-5">
           {
                menu.map(menuItem => <SetMenu key={menuItem.id} menu={menuItem}></SetMenu>)
            }
           </div>
            
        </div>
    );
};

export default MenuChart;