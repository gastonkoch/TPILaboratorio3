import { Button, Form } from 'react-bootstrap';
import './Register.css'
import { useForm } from '../../hook/useForm';
import { useNavigate } from 'react-router-dom';

const Register = ({isSignedIn, onLogIn, onLogOut}) => {

    const navigate = useNavigate()

    const { email, password, name, onInputChange, onResetForm } = useForm({
        email: '',
        password: '',
        name:''
    })

    // Estamos redirigiendo al usuario a landingpage, podemos hacerlo de esta manera ya que en el AppRouter se encuetra dicho path
    // Replace esta indicando que la entrada en el historial del navegador sera remplazada en vez de añadir una nueva, significa que cuando el usuario vuelve atras no volveria al register
    // State es el estado que optenemos desde la url
    // El logged indica al sistema que ya ingreso correctamente el usuario
    const onRegister = (event) => {
        event.preventDefault()

        navigate('/',{
            replace: true,
            state: {
                logged: true,
                email
            }
        })

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
                            placeholder='Ingrese su name...'
                            name="name"
                            value={name}
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
                            onChange={onInputChange}
                        />
                    </Form.Group>
                    <Button type='submit' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm">Registrarse</Button>
                </Form>
            </div>
        </div>
    )
}

export default Register