import { Container, Nav, Navbar, Button, Dropdown } from 'react-bootstrap';
import { useContext, useState } from "react";
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import Carrito from '../carrito/Carrito';
import "./NavBar.css"
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    let navigate = useNavigate();
    const { handleLogout, user } = useContext(AuthenticationContext);
    const [cartProducts, setCartProducts] = useState([]); // Estado del carrito

    const onHandleLogout = () => {
        handleLogout();
    };

    const onHandleLogin = () => {
        navigate("/login");
    };

    const onHandleProduct = () => {
        navigate("/productos");
    };

    const onHandleLanding = () => {
        navigate("/");
    };

    return (
        <>
            <Navbar data-bs-theme="dark" className='navbar'>
                <Container>
                    <Navbar.Brand href="productos" className='nameBussines' onClick={onHandleLanding}>Easy Grip</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='caja'>
                        <Nav className="me-auto caja-titulos" >
                            <Nav.Link onClick={onHandleProduct} className='products'>Productos</Nav.Link>
                            {/* Eliminar la navegación al carrito */}
                        </Nav>
                        {user &&
                            <Navbar.Text className='username'>
                                ¡Hola {user.name}!
                            </Navbar.Text>}
                        <Nav>
                            {user ? (
                                <Button type='button' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm" onClick={onHandleLogout}>Cerrar sesión</Button>
                            ) : (
                                <Button type='button' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm" onClick={onHandleLogin}>Iniciar sesión</Button>
                            )}
                        </Nav>
                        {/* Componente Carrito en el Navbar */}
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Carrito ({cartProducts.length})
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
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
