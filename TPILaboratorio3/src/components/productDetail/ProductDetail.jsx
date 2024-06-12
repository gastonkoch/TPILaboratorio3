import { useParams } from 'react-router-dom';
import data from '../products/Data_Test.json';
import { useState, useEffect } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [productOnScreen, setProductOnScreen] = useState({});
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    fetch(`https://localhost:7197/api/Product/id/${id}`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener el producto");
        }
        return response.json();
      })
      .then((productsData) => {
        let productFromAPI = {
          brand: productsData.brand,
          category: productsData.category,
          description: productsData.description,
          id: productsData.id,
          image: productsData.image,
          name: productsData.name,
          price: productsData.price,
          stock: productsData.stock
        }
        setProductOnScreen(productFromAPI)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (error) {
    return <div>Producto no encontrado</div>;
  }


  return (
    <div className="main-container">

      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image className='image' src={productOnScreen.image} rounded />
          </Col>
        </Row>
      </Container>

      <Container className='data'>
        <Form>
          <Form.Group className="mb-3" controlId="nameId">
            <Form.Label>{productOnScreen.name}</Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="nameId">
            <Form.Label>${productOnScreen.price}</Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="descriptionId">
            <Form.Label>{productOnScreen.description}</Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="stockId">
            <Form.Label><strong>Stock:</strong> {productOnScreen.stock} unidades</Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="categoryId">
            <Form.Label><strong>Categoría:</strong> {productOnScreen.category}</Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="brandId">
            <Form.Label><strong>Marca:</strong> {productOnScreen.brand}</Form.Label>
          </Form.Group>
        </Form>

        <Container className='buttonsBox'>
          <Container className='data '>
            <Button className='button' onClick={() => setCantidad(cantidad + 1)}>+</Button>
            <Button className='button' variant="primary" onClick={() => setCantidad(cantidad + 1)} >Agregar al Carrito ({cantidad})</Button>
            <Button className='button' onClick={() => setCantidad(cantidad - 1)}>-</Button>
          </Container>

          <Container>
            <Button className='button' variant="warning">Editar</Button>
            <Button className='button' variant="danger">Eliminar</Button>
          </Container>
        </Container>
      </Container>

    </div>
  );
};

export default ProductDetail;
