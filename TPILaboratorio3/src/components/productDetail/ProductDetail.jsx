import { useParams } from 'react-router-dom';
import data from '../products/Data_Test.json';
import { useState, useEffect } from 'react';
import { Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
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


  const searchById = (idParam) => {
    const productFinded = data.find(item => item.id == idParam);
    if (!productFinded) {
      setError(true);
    } else {
      setProductOnScreen(productFinded);
    }
  };

  useEffect(() => {
    searchById(id);
  }, [id]);

  if (error) {
    return <div>Producto no encontrado</div>;
  }
  
  
  return (
    <div className="main-container">

      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image className='image' src={productOnScreen.product_image} rounded />
          </Col>
        </Row>
      </Container>

      <Container className='data'>
        <Form>
            <Form.Group className="mb-3" controlId="nameId">
              <Form.Label>{productOnScreen.product_name}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="nameId">
              <Form.Label>${productOnScreen.product_price}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="descriptionId">
              <Form.Label>{productOnScreen.product_description}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="stockId">
              <Form.Label><strong>Stock:</strong> {productOnScreen.product_stock} unidades</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="categoryId">
              <Form.Label><strong>Categoría:</strong> {productOnScreen.product_category}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="brandId">
              <Form.Label><strong>Marca:</strong> {productOnScreen.product_brand}</Form.Label>
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
