import { useState, useRef } from 'react';
import { useForm } from '../../hook/useForm';
import './PayMethod.css';
import { Button, Form } from 'react-bootstrap';

// const PayMethod = () => {
//     console.log(1)
//     const [selectedMethod, setSelectedMethod] = useState('');
//     const [showCardData, setShowCardData] = useState(false);
//     const [showTransferData, setShowTransferData] = useState(false);
//     const [showCashData, setShowCashData] = useState(false);
//     const { nameAndLastName, email, dni, home, postalCode, onInputChange, onResetForm } = useForm({
//         nameAndLastName: '',
//         email: '',
//         dni: '',
//         home: '',
//         postalCode: '',
//     });

//     const handleMethodChange = (event) => {
//         const selectedValue = event.target.value;
//         setSelectedMethod(selectedValue);
//         setShowCardData(selectedValue === 'Tarjeta');
//         setShowTransferData(selectedValue === 'Transferencia');
//         setShowCashData(selectedValue === 'Efectivo');
//     };

//     const nameRef = useRef(null);
//     const emailRef = useRef(null);
//     const dniRef = useRef(null);
//     const homeRef = useRef(null);
//     const postalCodeRef = useRef(null);

//     const handlePay = (e) => {
//         e.preventDefault()
//         if (!nameRef.current.value) {
//             nameRef.current.focus()
//             setErrors((prev) => ({
//                 ...prev,
//                 name: true
//             }));
//             return
//         }

//         if (!emailRef.current.value) {
//             emailRef.current.focus()
//             setErrors((prev) => ({
//                 ...prev,
//                 email: true
//             }));
//             return
//         }

//         if (!dniRef.current.value) {
//             dniRef.current.focus()
//             setErrors((prev) => ({
//                 ...prev,
//                 dni: true
//             }));
//             return
//         }

//         if (!homeRef.current.value) {
//             homeRef.current.focus()
//             setErrors((prev) => ({
//                 ...prev,
//                 home: true
//             }));
//             return
//         }

//         if (!postalCodeRef.current.value) {
//             postalCodeRef.current.focus()
//             setErrors((prev) => ({
//                 ...prev,
//                 postalCode: true
//             }));
//             return
//         }

//         // validar api
//     }

    // return (
    //     <div className='divPay'>
    //         <h1>hola</h1>
            {/* <Form className='form' onSubmit={handlePay}>
                <h1>Proceso de pago</h1>
                <Form.Group controlId="userNombre" className='formGroup'>
                    <Form.Label className='text-dark labelForm'>Nombre y apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Ingrese su nombre y apellido...'
                        name="nameAndLastName"
                        value={nameAndLastName}
                        onChange={onInputChange}
                        ref={nameRef}
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
                        ref={emailRef}
                    />
                </Form.Group>

                <Form.Group controlId="userDni" className='formGroup'>
                    <Form.Label className='text-dark labelForm'>DNI</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Ingrese su DNI...'
                        name="dni"
                        value={dni}
                        onChange={onInputChange}
                        ref={dniRef}
                    />
                </Form.Group>

                <Form.Group controlId="userHome" className='formGroup'>
                    <Form.Label className='text-dark labelForm'>Domicilio</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Ingrese su domicilio...'
                        name="home"
                        value={home}
                        onChange={onInputChange}
                        ref={homeRef}
                    />
                </Form.Group>

                <Form.Group controlId="userPostalCode" className='formGroup'>
                    <Form.Label className='text-dark labelForm'>Codigo Postal</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Ingrese su codigo postal...'
                        name="postalCode"
                        value={postalCode}
                        onChange={onInputChange}
                        ref={postalCodeRef}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='text-dark labelForm'>Método de pago</Form.Label>
                    <Form.Select onChange={handleMethodChange}>
                        <option value="">Seleccionar</option>
                        <option value="Tarjeta">Tarjeta Debito/Crédito</option>
                        <option value="Transferencia">Transferencia</option>
                        <option value="Efectivo">Efectivo</option>
                    </Form.Select>
                </Form.Group>

                {showCardData && (
                    <>
                        <Form.Group controlId="userTarjetNumber" className='formGroup'>
                            <Form.Label className='text-dark labelForm'>Numero de Tarjeta</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Ingrese el numero de tarjeta...'
                                name="tarjetNumber"
                            // value={tarjetNumber}
                            // onChange={onInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="userSecurityCode" className='formGroup'>
                            <Form.Label className='text-dark labelForm'>Codigo de seguridad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Ingrese su codigo de seguridad...'
                                name="securityCode"
                            // value={securityCode}
                            // onChange={onInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="userExpirationDate" className='formGroup'>
                            <Form.Label className='text-dark labelForm'>Fecha de vencimiento</Form.Label>
                            <Form.Control
                                type="date"
                                name="expirationDate"
                            // value={expirationDate}
                            // onChange={onInputChange}
                            />
                        </Form.Group>
                    </>
                )}

                {showTransferData && (
                    <Form.Group controlId="userCbu" className='formGroup'>
                        <Form.Label className='text-dark labelForm'>CBU para transferir</Form.Label>
                        <Form.Control
                            type="number"
                            name="cbu"
                            readOnly
                            value={'12345678910'} // Esto es harcodeado es un cbu de prueba
                        // value={cbu}
                        // onChange={onInputChange}
                        />
                    </Form.Group>
                )}

                {showCashData && (
                    <Form.Group controlId="userPaymentCode" className='formGroup'>
                        <Form.Label className='text-dark labelForm'>Codigo de pago</Form.Label>
                        <Form.Control
                            type="text"
                            name="paymentCode"
                            readOnly
                        />
                    </Form.Group>
                )}

                <Button type='submit' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm">Pagar</Button>
            </Form> */}
        {/* </div>
    )
} */}

// export default PayMethod

import React from 'react'

const PayMethod = () => {
    console.log("Hola")
    // const [selectedMethod, setSelectedMethod] = useState('');
    // const [showCardData, setShowCardData] = useState(false);
    // const [showTransferData, setShowTransferData] = useState(false);
    // const [showCashData, setShowCashData] = useState(false);
    // const { nameAndLastName, email, dni, home, postalCode, onInputChange, onResetForm } = useForm({
    //     nameAndLastName: '',
    //     email: '',
    //     dni: '',
    //     home: '',
    //     postalCode: '',
    // });

    // const handleMethodChange = (event) => {
    //     const selectedValue = event.target.value;
    //     setSelectedMethod(selectedValue);
    //     setShowCardData(selectedValue === 'Tarjeta');
    //     setShowTransferData(selectedValue === 'Transferencia');
    //     setShowCashData(selectedValue === 'Efectivo');
    // };

    // const nameRef = useRef(null);
    // const emailRef = useRef(null);
    // const dniRef = useRef(null);
    // const homeRef = useRef(null);
    // const postalCodeRef = useRef(null);
    return (
        <>
        {/* <div className='divPay'> */}
            <h1>hola</h1>
            {/* <Form className='form' onSubmit={handlePay}>
        <h1>Proceso de pago</h1>
        <Form.Group controlId="userNombre" className='formGroup'>
            <Form.Label className='text-dark labelForm'>Nombre y apellido</Form.Label>
            <Form.Control
                type="text"
                placeholder='Ingrese su nombre y apellido...'
                name="nameAndLastName"
                value={nameAndLastName}
                onChange={onInputChange}
                ref={nameRef}
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
                ref={emailRef}
            />
        </Form.Group>

        <Form.Group controlId="userDni" className='formGroup'>
            <Form.Label className='text-dark labelForm'>DNI</Form.Label>
            <Form.Control
                type="text"
                placeholder='Ingrese su DNI...'
                name="dni"
                value={dni}
                onChange={onInputChange}
                ref={dniRef}
            />
        </Form.Group>

        <Form.Group controlId="userHome" className='formGroup'>
            <Form.Label className='text-dark labelForm'>Domicilio</Form.Label>
            <Form.Control
                type="text"
                placeholder='Ingrese su domicilio...'
                name="home"
                value={home}
                onChange={onInputChange}
                ref={homeRef}
            />
        </Form.Group>

        <Form.Group controlId="userPostalCode" className='formGroup'>
            <Form.Label className='text-dark labelForm'>Codigo Postal</Form.Label>
            <Form.Control
                type="text"
                placeholder='Ingrese su codigo postal...'
                name="postalCode"
                value={postalCode}
                onChange={onInputChange}
                ref={postalCodeRef}
            />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label className='text-dark labelForm'>Método de pago</Form.Label>
            <Form.Select onChange={handleMethodChange}>
                <option value="">Seleccionar</option>
                <option value="Tarjeta">Tarjeta Debito/Crédito</option>
                <option value="Transferencia">Transferencia</option>
                <option value="Efectivo">Efectivo</option>
            </Form.Select>
        </Form.Group>

        {showCardData && (
            <>
                <Form.Group controlId="userTarjetNumber" className='formGroup'>
                    <Form.Label className='text-dark labelForm'>Numero de Tarjeta</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Ingrese el numero de tarjeta...'
                        name="tarjetNumber"
                    // value={tarjetNumber}
                    // onChange={onInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="userSecurityCode" className='formGroup'>
                    <Form.Label className='text-dark labelForm'>Codigo de seguridad</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Ingrese su codigo de seguridad...'
                        name="securityCode"
                    // value={securityCode}
                    // onChange={onInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="userExpirationDate" className='formGroup'>
                    <Form.Label className='text-dark labelForm'>Fecha de vencimiento</Form.Label>
                    <Form.Control
                        type="date"
                        name="expirationDate"
                    // value={expirationDate}
                    // onChange={onInputChange}
                    />
                </Form.Group>
            </>
        )}

        {showTransferData && (
            <Form.Group controlId="userCbu" className='formGroup'>
                <Form.Label className='text-dark labelForm'>CBU para transferir</Form.Label>
                <Form.Control
                    type="number"
                    name="cbu"
                    readOnly
                    value={'12345678910'} // Esto es harcodeado es un cbu de prueba
                // value={cbu}
                // onChange={onInputChange}
                />
            </Form.Group>
        )}

        {showCashData && (
            <Form.Group controlId="userPaymentCode" className='formGroup'>
                <Form.Label className='text-dark labelForm'>Codigo de pago</Form.Label>
                <Form.Control
                    type="text"
                    name="paymentCode"
                    readOnly
                />
            </Form.Group>
        )}

        <Button type='submit' variant='warning' className="mb-3 mt-2 ps-5 pe-5 botonForm">Pagar</Button>
    </Form> */}
    {/* // </div> */}
    </>
    )
}

export default PayMethod