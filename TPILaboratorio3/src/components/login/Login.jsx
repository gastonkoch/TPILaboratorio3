import { Button, Form } from 'react-bootstrap';
import './Login.css'
import { useForm } from '../../hook/useForm';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()



    const { email, password, onInputChange, onResetForm } = useForm({
        email: '',
        password: ''
    })

    // Estamos redirigiendo al usuario a landingpage, podemos hacerlo de esta manera ya que en el AppRouter se encuetra dicho path
    // Replace esta indicando que la entrada en el historial del navegador sera remplazada en vez de añadir una nueva, significa que cuando el usuario vuelve atras no volveria al login
    // State es el estado que optenemos desde la url
    // El logged indica al sistema que ya ingreso correctamente el usuario
    const onLogin = (event) => {
        event.preventDefault()

        navigate('/landingpage',{
            replace: true,
            state: {
                logged: true,
                email
            }
        })

        onResetForm();
    }

    return (
        <div className='divLogin'>
            <Form onSubmit={onLogin} className='form'>
                <h1>Iniciar Sesión</h1>
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
                <Button type='submit' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm">Ingresar</Button>
            </Form>
            <p className='pLogin'>¿Olvidó su contraseña?</p>
        </div>
    )
}

export default Login