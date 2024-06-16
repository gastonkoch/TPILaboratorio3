import { useParams } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import "./ProductDetail.css";
import { CartContext } from '../../services/cart/CartContext';

export const ProductsAddedContext = createContext({});

const ProductDetail = () => {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [productOnScreen, setProductOnScreen] = useState({});

  const {handleAddCart} = useContext(CartContext);

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
          stock: productsData.stock,
          quantity: 0
        }
        setProductOnScreen(productFromAPI)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);


const onHandleAdd = () => {
  setProductOnScreen((prevProduct) => ({
    ...prevProduct,
    quantity: prevProduct.quantity + 1
  }));
};

const handleAddCarrito = () => {
  handleAddCart(productOnScreen.quantity,productOnScreen)
  setProductOnScreen((prevProduct) => ({
    ...prevProduct,
    quantity: 0
  }));
}

const onHandleDelete = () => {
  setProductOnScreen((prevProduct) => ({
    ...prevProduct,
    quantity: prevProduct.quantity - 1
  }));
};



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
            <Button className='button' onClick={onHandleAdd}>+</Button>
            <Button className='button' variant="primary" onClick={handleAddCarrito}>Agregar al Carrito {productOnScreen.quantity}</Button>
            <Button className='button' onClick={onHandleDelete}>-</Button>
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
