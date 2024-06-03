import { useParams } from 'react-router-dom';
import data from '../products/Data_Test.json'
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  const id = useParams();
  const [error, setError] = useState(false);
  const [productOnScreen, setProductOnScreen] = useState({});

  const searchById = (idParam) => {
    const productFinded = data.find(item => item.id == idParam);
    if (!productFinded) {
      setError(true)
    }
    setProductOnScreen(productFinded)

  };

  useEffect(() => {
    searchById(id.id)
  }, [id])

  return (
    <>
      {console.log(productOnScreen)}
      {/* este div separa la pantalla en 2 (40% y 60%) */}
      <div className="main-container">
        <div className="left-container">
          <img src={productOnScreen.product_image} alt={productOnScreen.product_name} />
          {/* a la izq va la foto */}
        </div>
        <div className="right-container">
          <h3 className="titulo">{productOnScreen.product_name}</h3>
          <p className="descripcion">{productOnScreen.product_description}</p>
          <p className="stock">Stock: {productOnScreen.product_stock}</p>
          <p className="precio">${productOnScreen.product_price}</p>
          {/* a la derecha va la info del producto que resta mostrar y los botones de añadir al carrito y comprar */}
        </div>
      </div>
      {/* 

      <div className="container">
        <div className="producto-detalle">
          <img src={item.imagen} alt={item.titulo} />
          <div>
            <h3 className="titulo">{item.titulo}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="categoria">Categoría: {toCapital(item.categoria)}</p>
            <p className="precio">${item.precio}</p>
            <ItemCount
              cantidad={cantidad}
              handleSumar={handleSumar}
              handleRestar={handleRestar}
              handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
            />
          </div>
        </div>
      </div> */}

    </>
  )
}

export default ProductDetail