import PropTypes from "prop-types";


const Item = ({items}) => {
    const {name,price} = items;
    // const {item ,setItem } = useState([])
    // useEffect(() =>{
    //     f
    // },[])
console.log(name)

    return (
        <div className="flex justify-between">
            <p>{name}</p>
            <p>{price}</p>
            
        </div>
    );
};
 Item.propTypes={
    items: PropTypes.object
 }

export default Item;