import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import './Login.css'
const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const onHandleEmail = (event) => {
        setemail(event.target.value)
    }
    const onHandlePassword = (event) => {
        setpassword(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <h1>Bienvenido</h1>
            <Form onSubmit={onSubmit} className='form'>
                <Form.Group controlId="userEmail" className='formGroup'>
                    <Form.Label className='text-dark labelForm'>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Ingrese su email...'
                        value={email}
                        onChange={onHandleEmail}
                    />
                </Form.Group>
                <Form.Group controlId="userPassword" className='formGroup'>
                    <Form.Label className='text-dark labelForm'>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder='Ingrese su contraseña...'
                        value={password}
                        onChange={onHandlePassword}
                    />
                </Form.Group>
                <Button type='submit' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm">Ingresar</Button>
            </Form>
            <p>Registrarse</p>
            <p>¿Olvidó su contraseña?</p>
        </div>
    )
}

export default Login