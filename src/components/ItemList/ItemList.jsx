import PropTypes from "prop-types";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
    return (
        <>
            {products?.map((element) => (
                <Item
                    
                    key={element.id}
                    id={element.id}
                    name={element.nombre}
                    description={element.descripcion}
                    price={element.precio}
                    category={element.categoria}
                    img={element.img}
                />
            ))}
        </>
    );
};

ItemList.propTypes = {
    products: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
};

export default ItemList;