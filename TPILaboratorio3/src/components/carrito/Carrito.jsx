import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

const Carrito = ({products}) => {
  return (
    <>
        <h1>PRUEBA</h1>
    </>
  )
}

export default Carrito

Carrito.prototype = {
    products: propTypes.array,
}