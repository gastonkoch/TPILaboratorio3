import { Container, Nav, Navbar, Button } from 'react-bootstrap';
// import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
    // const { state } = useLocation()
    // const navigate = useNavigate()


    // const onLogout = () => {
    //     navigate('/login',{
    //         replace:true,
    //     })
    // }

    return (
        <>
            {/* <Navbar data-bs-theme="dark" className='navbar'>
                <Container className='caja'>
                    <NavLink to={'/'} className='nameBussines'>Easy Grip</NavLink>
                    <NavLink to={'/products'} className='products'>Productos</NavLink>

                    {
                        state?.logged ? (
                            <div className='user'>
                                <p className='username'>{state?.email}</p>
                                <Button type='button' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm" onClick={onLogout}>Cerrar sesión</Button>
                            </div>
                        )
                            :
                            (
                                <Nav className="me-auto ">
                                    <NavLink to={'/login'} className="nav-link">Iniciar sesión</NavLink>
                                    <NavLink to={'/register'} className="nav-link">Registrarse</NavLink>
                                </Nav>
                            )
                    }

                </Container>
            </Navbar>
            <Outlet /> */}

            <Navbar data-bs-theme="dark" className='navbar'>
                <Container>
                    <Navbar.Brand href="productos" className='nameBussines'>Easy Grip</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='caja'>
                        <Nav className="me-auto caja-titulos" >
                            <Nav.Link href="productos" className='products'>Productos</Nav.Link>
                            <Nav.Link href="login">Iniciar sesión</Nav.Link>
                            <Nav.Link href="registrarse">Registrarse</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Button type='button' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm">Cerrar sesión</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar