import { Container, Nav, Navbar, Button, Dropdown } from 'react-bootstrap';
import { useContext, useState } from "react";
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import Carrito from '../carrito/Carrito';
import "./NavBar.css"
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../services/cart/CartContext';
import logo from '/public/logo.ico';

const userValueString = localStorage.getItem("user");
const userValue = userValueString ? JSON.parse(userValueString) : null;
const userValueSession = userValue ? userValue.userSession : null;

const NavBar = () => {
    const [user, setUser] = useState(userValueSession)
    let navigate = useNavigate();
    const { handleLogout } = useContext(AuthenticationContext);
    const [cartProducts, setCartProducts] = useState([]);
    const { handleProduct } = useContext(CartContext);
    console.log(user)
    const products = handleProduct();
    let totalQuantity = 0;

    if (products.length > 0) {
        for (const product of products) {
            totalQuantity += product.quantity; // Corregimos el nombre de la propiedad
        }
    }

    const onHandleLogout = () => {
        window.location.href = '/'
        handleLogout();
    };

    const onHandleLogin = () => {
        navigate("/login");
    };

    const onHandleProduct = () => {
        navigate("/productos");
    };

    const onHandleNewProduct = () => {
        navigate("/nuevoProducto");
    };

    const onHandleCustomer = () => {
        navigate("/customer");
    };

    const onHandleSeller = () => {
        navigate("/seller");
    };

    const onHandleLanding = () => {
        navigate("/");
    };

    return (
        <>
            <Navbar data-bs-theme="dark" className='navbar'>
                <Container>             
                    <Navbar.Brand className='nameBussines' onClick={onHandleLanding}><img style={{ height: '6vh', cursor: 'pointer'  }} className="image-order" src={logo}alt="First slide"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='caja'>
                        <Nav className="me-auto caja-titulos" >
                            <Nav.Link onClick={onHandleProduct} className='products'>Productos</Nav.Link>
                        </Nav>
                        {user && user.userType !== 0 &&
                            <Nav className="me-auto caja-titulos" >
                                <Nav.Link onClick={onHandleNewProduct} className='option-navbar'>Agregar Producto</Nav.Link>
                            </Nav>
                        }
                        {user && user.userType == 2 &&
                            <Nav className="me-auto caja-titulos" >
                                <Nav.Link onClick={onHandleCustomer} className='option-navbar'>Clientes</Nav.Link>
                            </Nav>}
                        {user && user.userType == 2 &&
                            <Nav className="me-auto caja-titulos" >
                                <Nav.Link onClick={onHandleSeller} className='option-navbar'>Vendedores</Nav.Link>
                            </Nav>}
                        {user &&
                            <Navbar.Text className='username'>
                                ¡Hola {user.name}!
                            </Navbar.Text>}
                        <Nav>
                            {user ? (
                                <Button type='button' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm" onClick={onHandleLogout}>Logout</Button>
                            ) : (
                                <Button type='button' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm" onClick={onHandleLogin}>Login</Button>
                            )}
                        </Nav>

                        <Dropdown align="end">
                            <Dropdown.Toggle className='button-cart-navbar' id="dropdown-basic">
                                Carrito ({totalQuantity})
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='carrito-desplegable'>
                                <Carrito products={cartProducts} setCartProducts={setCartProducts} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
