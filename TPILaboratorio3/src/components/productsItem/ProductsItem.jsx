import proptypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ProductsItem = ({item}) => {
    let navigate = useNavigate()
    const onProductDetail = () =>{
        navigate(`/producto/${item.id}`)
    }
    return (
        <>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.category}</Card.Text>
                    <Card.Text>{item.brand}</Card.Text>
                    <Card.Text>${item.price}</Card.Text>
                    <Button variant="primary" onClick={onProductDetail}>Ver mas</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductsItem

ProductsItem.proptypes = {
    id: proptypes.number,
    product_name: proptypes.string,
    product_price: proptypes.number,
    product_description: proptypes.string,
    product_stock: proptypes.number,
    product_image: proptypes.string
}