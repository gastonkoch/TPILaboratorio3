import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
    const { state } = useLocation()
    const navigate = useNavigate()


    const onLogout = () => {
        navigate('/login',{
            replace:true,
        })
    }

    return (
        <>
            <Navbar data-bs-theme="dark" className='navbar'>
                <Container className='caja'>
                    <NavLink to={'/'} className='nameBussines'>Easy Grip</NavLink>

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
            <Outlet />
        </>
    )
}

export default NavBar