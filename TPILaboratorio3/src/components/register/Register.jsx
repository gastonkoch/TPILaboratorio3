import { Button, Form } from 'react-bootstrap';
import './Register.css'
import { useState, useContext, useRef} from "react";
import { useForm} from '../../hook/useForm';
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';

const Register = ({isSignedIn, onLogIn, onLogOut}) => {

    const navigate = useNavigate()
    const { handleLogin } = useContext(AuthenticationContext);

    const { email, password, name, onInputChange, onResetForm } = useForm({
        email: '',
        password: '',
        name:''
    })

    const [errors, setErrors] = useState({
        email: false,
        password: false,
        name: false,
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);

    const onRegister = (event) => {
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

        if (!nameRef.current.value) {
            nameRef.current.focus();
            alert("Debe ingresar su contraseña")
            setErrors({ ...errors, password: true });
            return;
        }

        setErrors({ ...errors, exist: false });

        //FALTA LA VALIDACION DE CAMPOS
        handleLogin(name)
        navigate('/')

        onResetForm();
    }

    return (
        <div className='divBoxRegister'>
            <div className='divRegister'>
                <Form onSubmit={onRegister} className='form'>
                    <h1>Registrate</h1>
                    <Form.Group controlId="userName" className='formGroup'>
                        <Form.Label className='text-dark labelForm'>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder='Ingrese su name ...'
                            name="name"
                            value={name}
                            ref={nameRef}
                            onChange={onInputChange}
                        />
                    </Form.Group>
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
                    <div className='box-button-register'>
                        <Button type='submit' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm">Registrarse</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Register