import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [enteredName, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredAuthor] = useState("");
  const [enteredStock, setEnteredRating] = useState("");
  const [enteredPrice, setEnteredPageCount] = useState("");
  const [enteredImageUrl, setEnteredImageUrl] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredBrand, setEnteredBrand] = useState("");
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    setFormValid(
      enteredName !== "" &&
        enteredDescription !== "" &&
        enteredPrice !== "" &&
        enteredStock !== "" &&
        enteredCategory !== "" &&
        enteredBrand !== "" &&
        enteredImageUrl !== ""
    );
  }, [enteredName, enteredDescription, enteredPrice, enteredStock,enteredCategory,enteredBrand,enteredImageUrl]);

  const handleChangeName = (e) => {
    setEnteredTitle(e.target.value);
  };

  const changeDescriptionHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const changeStockHandler = (event) => {
    setEnteredRating(event.target.value);
  };

  const changePriceHandler = (event) => {
    setEnteredPageCount(event.target.value);
  };

  const changeImageUrlHandler = (event) => {
    setEnteredImageUrl(event.target.value);
  };
  const changeBrandHandler = (event) => {
    setEnteredBrand(event.target.value);
  };

  const changeCategoryHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const submitProductHandler = async (event) => {
    event.preventDefault();
    const productDTO = {
      brand: enteredBrand,
      category: enteredCategory,
      description: enteredDescription,
      id: 0,
      image: enteredImageUrl,
      name: enteredName,
      price:enteredPrice,
      stock: enteredStock
    };
    try {
      const response = await fetch("https://localhost:7197/api/Product", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productDTO),
      });

      if (!response.ok) {
        throw new Error("Failed to add product.");
      }

      const data = await response.json();
      navigate("/productos")
    } catch (error) {
      alert(error);
    }

    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredRating("");
    setEnteredPageCount("");
    setEnteredImageUrl("");
  };

  return (
    <>
        <Card className="m-4 w-50" bg="success">
          <Card.Body>
            <Form className="text-white" onSubmit={submitProductHandler}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookTitle">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresar el Nombre del producto"
                      onChange={handleChangeName}
                      value={enteredName}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookAuthor">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresar descripción"
                      onChange={changeDescriptionHandler}
                      value={enteredDescription}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookPageCount">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Ingresar precio"
                      min={1}
                      onChange={changePriceHandler}
                      value={enteredPrice}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookRating">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Ingresar stock"
                      max={10000}
                      min={0}
                      onChange={changeStockHandler}
                      value={enteredStock}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookPageCount">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresar categoria"
                      onChange={changeCategoryHandler}
                      value={enteredCategory}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bookRating">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresar marca"
                      onChange={changeBrandHandler}
                      value={enteredBrand}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-between">
                <Form.Group className="mb-3" controlId="bookImageUrl">
                  <Form.Label>URL de imagen</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresar url de imagen"
                    onChange={changeImageUrlHandler}
                    value={enteredImageUrl}
                  />
                </Form.Group>
              </Row>
              <Row className="justify-content-end">
                <Col md={3} className="d-flex justify-content-end">
                  <Button variant="dark" type="submit" disabled={!formValid}>
                    Agregar Producto 
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
    </>
  );
};

export default AddProducts;

