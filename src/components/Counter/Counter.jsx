import { useState } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

const Counter = ({ stock }) => {

    const [conteo, setConteo] = useState(0);

    const incrementar = () => {
        setConteo(conteo + 1);
    };

    const decrementar = () => {
        if (conteo != 0) {
            setConteo(conteo - 1);
        } else {
            setConteo(0);
        }
    };


    return (
        <div>
            <button disabled={conteo <= 0} onClick={decrementar}>-</button>
            <span>{conteo}</span>
            <button disabled={conteo >= stock} onClick={incrementar}>+</button>
            <div>
                <button>Agregar al carrito</button>
            </div>

        </div>
    );
};

Counter.propTypes = {
    stock: PropTypes.number
};

export default Counter;
