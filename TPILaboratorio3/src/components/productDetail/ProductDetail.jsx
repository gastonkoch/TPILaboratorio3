import data from '../products/Data_Test.json'

const ProductDetail = ({id}) => {
    
    const searchById = (idParam) => {
        const productFinded = data.find(item => item.id === id);
        if (productFinded) {
            
        }
    };


  return (
    <>
        {
             searchById(id)
            //Despues de filtrar hay que llenar las variables de estado con la info de los items para mostrar en pantalla
        
        }
        {/* este div separa la pantalla en 2 (40% y 60%) */}
        <div className="main-container">
            <div className="left-container"> 
            {/* a la izq va la foto */}
            </div>
            <div className="right-container"> 
            {/* a la derecha va la info del producto que resta mostrar y los botones de añadir al carrito y comprar */}
            </div>
        </div>
    </>
  )
}

export default ProductDetail