import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ProductsItem from '../productsItem/ProductsItem';
import data from '../products/Data_Test.json';
import "./Products.css";
import Carrousel from '../carrousel/Carrousel';

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    // Calcular el índice de los productos actuales
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calcular el número total de páginas
    const totalPages = Math.ceil(data.length / productsPerPage);

    // Manejar el cambio de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Manejar el cambio a la página siguiente
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Manejar el cambio a la página anterior
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <Carrousel/>
            <div className='products-container'>
                {currentProducts.map(item => (
                    <div className="product-item" key={item.id}>
                        <ProductsItem
                            id={item.id}
                            product_name={item.product_name}
                            product_price={item.product_price}
                            product_description={item.product_description}
                            product_stock={item.product_stock}
                            product_image={item.product_image}
                            product_category={item.product_category}
                            product_brand={item.product_brand}
                        />
                    </div>
                ))}
            </div>
            <div className="pagination">
                <Button
                    className="button"
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                >{"<<"}</Button>
                <Button
                    className="button"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >{"<"}</Button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`button ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </Button>
                ))}
                <Button
                    className="button"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >{">"}</Button>
                <Button
                    className="button"
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                >{">>"}</Button>
            </div>
        </div>
    );
};

export default Products;
