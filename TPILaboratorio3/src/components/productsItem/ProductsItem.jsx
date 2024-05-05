import proptypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductsItem = ({ id, product_name, product_price, product_description, product_stock, product_image }) => {
    return (
        <>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={product_image} />
                <Card.Body>
                    <Card.Title>{product_name}</Card.Title>
                    <Card.Text>
                        ${product_price}
                    </Card.Text>
                    <Button variant="primary">Ver mas</Button>
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