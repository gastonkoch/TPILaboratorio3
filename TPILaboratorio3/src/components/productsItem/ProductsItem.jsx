import proptypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ProductsItem = ({item}) => {
    let navigate = useNavigate()
    const onProductDetail = () =>{
        navigate(`/producto/${id}`)
    }
    // { id, product_name, product_price, product_description, product_stock, product_image, product_category, product_brand }
    // console.log(id)
    // console.log(product_name)
    // console.log(product_price)
    // console.log(product_description)
    // console.log(product_stock)
    // console.log(product_image)
    // console.log(product_category)
    // console.log(product_brand)
    console.log(item)
    return (
        <>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={item.product_image} />
                <Card.Body>
                    <Card.Title>{item.product_name}</Card.Title>
                    <Card.Text>{item.product_category}</Card.Text>
                    <Card.Text>{item.product_brand}</Card.Text>
                    <Card.Text>${item.product_price}</Card.Text>
                    <Button variant="primary" onClick={onProductDetail}>Ver mas</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductsItem

// ProductsItem.proptypes = {
//     id: proptypes.number,
//     product_name: proptypes.string,
//     product_price: proptypes.number,
//     product_description: proptypes.string,
//     product_stock: proptypes.number,
//     product_image: proptypes.string
// }