import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../services/cart/CartContext';
import { useNavigate } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './Order.css';
import logo from '/public/logo.ico';

export const Order = () => {
    const { handleProduct } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setProducts(handleProduct());
    }, [handleProduct]);

    let totalAmount = 0;

    return (
        <Container className='order-box'>
            <Container className='box-order'>
                <Container className='right-order'>
                    <Form className='container-order'>
                        <Container>
                            <Row>
                                <Col className='title-order'>Nombre</Col>
                                <Col className='title-order'>Precio</Col>
                                <Col className='title-order'>Cantidad</Col>
                                <Col className='title-order'>Total</Col>
                            </Row>
                            {products.map((product, index) => {
                                const amountRow = product.price * product.quantity;
                                totalAmount += amountRow;
                                return (
                                    <Row key={index} className='d-flex justify-content-between align-items-center product'>
                                        <Col ><span>{product.name}</span></Col>
                                        <Col ><span>${product.price.toFixed(2)}</span></Col>
                                        <Col><span>{product.quantity}</span></Col>
                                        <Col><span>${amountRow.toFixed(2)}</span></Col>
                                    </Row>
                                );
                            })}
                        </Container>
                    </Form>
                </Container>
                <Container className='left-order'>
                    <img style={{ height: '30vh' }} className="image-order" src={logo}alt="First slide"/>
                    <Container>
                        <h3>Total: ${totalAmount.toFixed(2)}</h3>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
};
