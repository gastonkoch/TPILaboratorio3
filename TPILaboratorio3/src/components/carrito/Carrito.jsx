import React from 'react';
// import PropTypes from 'prop-types';
import { Button, ListGroup } from 'react-bootstrap';
import PayMethod from '../payMethod/PayMethod';



const Carrito = ({ products, setCartProducts }) => {
  const handleRemoveProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setCartProducts(newProducts);
  };

  const handlePay = () => {
    // Aquí podrías implementar alguna lógica adicional antes de llamar al componente PayMethod
   
    // <PayMethod></PayMethod>
    console.log("b")
  };

  return (
    <>
      {products.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ListGroup variant="flush">
          {products.map((product, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <span>{product.name}</span>
              <span>${product.price.toFixed(2)}</span>
              <Button variant="danger" size="sm" onClick={() => handleRemoveProduct(index)}>Eliminar</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <Button variant="success" onClick={handlePay} className="w-100 mt-2">
        Pagar
      </Button>
    </>
  );
};

// Carrito.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired
//     })
//   ).isRequired,
//   setCartProducts: PropTypes.func.isRequired
// };

export default Carrito;
