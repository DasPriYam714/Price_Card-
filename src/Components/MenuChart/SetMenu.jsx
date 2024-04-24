import PropTypes from "prop-types";
import Item from "./Item";

const SetMenu = ({ menu }) => {
  const { id,name, total_price, item_img, items } = menu;
  return (
    <div className=" flex flex-col bg-slate-200 p-5 rounded-xl md: mt-5">
      <img className=" mb-5 min-h-fit w-full" src={item_img} alt="" />

      <h2 className="font-semibold text-2xl">Set Menu: {name}</h2>
      <h3 className="font-semibold text-xl">Price: {total_price}</h3>
      <h3 className="font-semibold text-xl">Items:</h3>
      <div className=" flex-grow font-semibold text-lg">
        
        {
            items.map((it)=> <Item key={id} items={it}></Item>)
        }
        
      </div>
      <button className=" mt-5 w-full bg-slate-400 hover:bg-slate-500 rounded-xl font-bold py-2"> Order</button>
    </div>
  );
};
SetMenu.propTypes = {
  menu: PropTypes.object,
};
export default SetMenu;
