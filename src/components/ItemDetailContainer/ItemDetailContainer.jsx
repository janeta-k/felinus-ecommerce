import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../../data.json";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    console.log(id)
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(Data);
            const data = await response.json();
            setProducts(data);
          }catch(error) {
            console.log(error);
          }
        }
        fetchData();
    }, []);

    const productFilter = Data.filter((product) => product.id == id);

  return (
    <>
        <ItemDetail products={productFilter}/>
    </>
  );
};

export default ItemDetailContainer;
