import { Button, Form } from 'react-bootstrap';
import './Login.css'
import { useState, useContext, useRef } from "react";
import { useForm } from '../../hook/useForm';
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';

const Login = () => {

    const { email, password, onInputChange, onResetForm} = useForm({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const navigate = useNavigate();

    const { handleLogin } = useContext(AuthenticationContext);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const onLogin = (event) => {
        event.preventDefault()
        
        if (!emailRef.current.value) {
            emailRef.current.focus();
            alert("Debe ingresar su email")
            setErrors({ ...errors, email: true });
            return;
        }

        if (!passwordRef.current.value) {
            passwordRef.current.focus();
            alert("Debe ingresar su contraseña")
            setErrors({ ...errors, password: true });
            return;
        }

        setErrors({ ...errors, exist: false });

        //Busqueda en la base si el usuario existe
        handleLogin(email)
        navigate('/')
        onResetForm();
    }

    const onRegister = () => {
        navigate("/registrarse")
    }

    return (
        <div className='divBox'>
            <div className='divLogin'>
                <Form className='form' onSubmit={onLogin}>
                    <h1>Iniciar Sesión</h1>
                    <Form.Group controlId="userEmail" className='formGroup'>
                        <Form.Label className='text-dark labelForm'>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder='Ingrese su email...'
                            name="email"
                            value={email}
                            ref={emailRef}
                            onChange={onInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="userPassword" className='formGroup'>
                        <Form.Label className='text-dark labelForm'>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder='Ingrese su contraseña...'
                            name="password"
                            value={password}
                            ref={passwordRef}
                            onChange={onInputChange}
                        />
                    </Form.Group>
                    <Button type='submit' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm">Ingresar</Button>
                </Form>
                <p className='pLogin'>¿Olvidó su contraseña?</p>
                <p className='pLogin' onClick={onRegister}>Registrarse</p>
            </div>
        </div>
    )
}

export default Login