import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Counter from "../Counter/Counter";

import "./ItemDetail.css";

const ItemDetail = ({ products }) => {
  return (
    <>
      {products?.map((element) => (
        <Container key={element.id} className="card-container">
          <Row>
            <Col sm={4}>
              <Card.Img variant="top" src={element.img} />
            </Col>
            <Col sm={8}>
              <Card.Body>
                <Card.Title>{element.nombre}</Card.Title>
                <Card.Text>${element.precio}</Card.Text>
                <Card.Text>{element.descripcion}</Card.Text>
              </Card.Body>
              <div>
                <Counter stock={element.stock} />
              </div>
            </Col>
          </Row>
        </Container>
      ))};
    </>
  );
};

ItemDetail.propTypes = {
  products: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
  ])
};

export default ItemDetail;

