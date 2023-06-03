import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../../data.json";

import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  console.log(categoryId);
  
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

  const categoryFilter = Data.filter((product) => product.categoria == categoryId);

  return(
    <>
      <h5 className="title">La mejor calidad para tu amigo gatuno </h5>
      <Container >
       <Row>
      {categoryId ? <ItemList products={categoryFilter}/> : <ItemList products={Data}/>}
      </Row>
    </Container>
    </>
  );
};

export default ItemListContainer;
