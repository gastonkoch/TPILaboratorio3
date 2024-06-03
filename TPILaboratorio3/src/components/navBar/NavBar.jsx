import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useContext } from "react";
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import "./NavBar.css"
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    let navigate = useNavigate()
    const { handleLogout, user } = useContext(AuthenticationContext);

    const onHandleLogout = () => {
        handleLogout()
    }

    const onHandleLogin = () => {
        navigate("/login");
    }

    const onHandleLanding = () => {
        navigate("/");
    }

    return (
        <>
            <Navbar data-bs-theme="dark" className='navbar'>
                <Container>
                    <Navbar.Brand href="productos" className='nameBussines' onClick={onHandleLanding}>Easy Grip</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='caja'>
                        <Nav className="me-auto caja-titulos" >
                            <Nav.Link href="productos" className='products'>Productos</Nav.Link>
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar