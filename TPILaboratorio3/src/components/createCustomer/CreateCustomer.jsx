import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./CreateCustomer.css";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const CreateCustomer = () => {
    const { id } = useParams();
    const [customerOnScreen, setCustomerOnScreen] = useState({
        name: '',
        lastName: '',
        password: '',
        id: '',
        email: '',
        userName: '',
        adress: ''
    })

    let navigate = useNavigate();


    const submitCreateCustomerHandler = (e) => {
        e.preventDefault()
        fetch(`https://localhost:7197/customer`, {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerOnScreen)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al actualizar el producto");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        navigate(`/customer`)
    }

    const handleCancel = () => (
        navigate(`/customer`)
    )

    return (
        <>
            <div className="divUpdateCustomer">
                <Card className="m-4 w-50 formUpdateCustomer">
                    <h1>Crear cliente</h1>
                    <Card.Body>
                        <Form className="text-white box" onSubmit={submitCreateCustomerHandler}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="nombre">
                                        <Form.Label className="labelForm">Nombre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingresar el nombre"
                                            value={customerOnScreen.name}
                                            onChange={(e) => setCustomerOnScreen({ ...customerOnScreen, name: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="apellido">
                                        <Form.Label className="labelForm">Apellido</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingresar apellido"
                                            value={customerOnScreen.lastName}
                                            onChange={(e) => setCustomerOnScreen({ ...customerOnScreen, lastName: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label className="labelForm">Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Ingresar email"
                                            max={10000}
                                            min={0}
                                            value={customerOnScreen.email}
                                            onChange={(e) => setCustomerOnScreen({ ...customerOnScreen, email: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="usuario">
                                        <Form.Label className="labelForm">Usuario</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingresar nombre de usuario"
                                            value={customerOnScreen.userName}
                                            onChange={(e) => setCustomerOnScreen({ ...customerOnScreen, userName: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="direccion">
                                        <Form.Label className="labelForm">Direccion</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingresar direccion"
                                            value={customerOnScreen.adress}
                                            onChange={(e) => setCustomerOnScreen({ ...customerOnScreen, adress: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="box-button-update">
                                <Button type="submit" className="mb-3 mt-2 ps-5 pe-5 botonFormAdd botonFormUpdateCus">Crear</Button>
                                <Button type="button" className="mb-3 mt-2 ps-5 pe-5 botonFormAdd botonFormUpdateCus botonFormUpdateCusCancel" onClick={handleCancel}>Cancelar</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default CreateCustomer