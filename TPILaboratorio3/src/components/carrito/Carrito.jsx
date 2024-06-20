import React, { useContext, useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../services/cart/CartContext';
import './Carrito.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Carrito = ({ setCartProducts }) => {
  const [showPayMethod, setShowPayMethod] = useState(false);
  const { handleProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(handleProduct());
  }, [handleProduct]);

  const handleRemoveProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    setCartProducts(newProducts);
  };

  const handlePay = () => {
    if(products.length === 0){
      alert("Debe agregar productos al carrito")
    } else {
      navigate('/paymethod');
    }
  };

  const handleBack = () => {
    setShowPayMethod(false);
  };

  return (
    <div className='box'>
      <div className='top'>
        {products.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <Container>
            {products.map((product, index) => (
              <Row key={index} className='d-flex justify-content-between align-items-center product'>
                <Col><span>{product.name}</span></Col>
                <Col><span>${product.price.toFixed(2)}</span></Col>
                <Col><span>{product.quantity}</span></Col>
                <Col><Button variant='danger' size='sm' onClick={() => handleRemoveProduct(index)}>X</Button></Col>
              </Row>
            ))}
          </Container>
        )}
      </div>
      <div className='bot'>
        <Button variant='success' onClick={handlePay} className='w-100 mt-2 botonPagar'>Pagar</Button>
      </div>
    </div>
  );
};

export default Carrito;
