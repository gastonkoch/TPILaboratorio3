import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import PayMethod from '../payMethod/PayMethod';
import { useNavigate } from 'react-router-dom';
import "./Carrito.css"

const Carrito = ({ products, setCartProducts }) => {
  const [showPayMethod, setShowPayMethod] = useState(false);
  const navigate = useNavigate();

  const handleRemoveProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setCartProducts(newProducts);
  };

  const handlePay = () => {
    navigate("/paymethod")
  };

  const handleBack = () => {
    setShowPayMethod(false);
  };

  return (
      <div className='box'>
        <div className='top'>
          {products.length === 0 ? <p>El carrito está vacío</p>
                                : (<ListGroup variant="flush">
                                    {products.map((product, index) => (
                                      <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                        <span>{product.name}</span>
                                        <span>${product.price.toFixed(2)}</span>
                                        <Button variant="danger" size="sm" onClick={() => handleRemoveProduct(index)}>Eliminar</Button>
                                      </ListGroup.Item>
                                    ))}
                                  </ListGroup>
                                )}
          </div>
          <div className='bot'> 
            <Button variant="success" onClick={handlePay} className="w-100 mt-2">Pagar</Button>
          </div>
      </div>
  );
};

export default Carrito;
