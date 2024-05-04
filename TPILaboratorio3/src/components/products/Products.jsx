import React from 'react'
import ProductsItem from '../productsItem/ProductsItem'
import data from '../products/Data_Test.json'

import "./Products.css";
const Products = () => {
    console.log(data)
    return (
        <div className='products-container'>
            {data.map(item => (
                <div className="product-item">
                    <ProductsItem
                        key={item.id}
                        id={item.id}
                        product_name={item.product_name}
                        product_price={item.product_price}
                        product_description={item.product_description}
                        product_stock={item.product_stock}
                        product_image={item.product_image}
                    />
                </div>
            ))}
        </div>
    )
}

export default Products