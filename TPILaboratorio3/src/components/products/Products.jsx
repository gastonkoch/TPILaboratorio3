import { useState, useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import ProductsItem from '../productsItem/ProductsItem';
import "./Products.css";
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import Form from 'react-bootstrap/Form';

const Products = () => {

    const [productData, setProductsData] = useState([])
    const [nameSearch, setNameSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;
    const { user } = useContext(AuthenticationContext);
    // Calcular el índice de los productos actuales
    let indexOfLastProduct = currentPage * productsPerPage;
    let indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    let currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calcular el número total de páginas
    const totalPages = Math.ceil(productData.length / productsPerPage);

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

    useEffect(() => {
        fetch("https://localhost:7197/api/Product", {
            method: "GET",
            mode: "cors",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener los productos");
                }
                return response.json();
            })
            .then((productsData) => {
                setProductsData(productsData)
                indexOfLastProduct = currentPage * productsPerPage;
                indexOfFirstProduct = indexOfLastProduct - productsPerPage;
                currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const handleNameSearch = (e) => {
        setNameSearch(e.target.value);
    };

    const onHandleSearch = () => {
        const nameFilter = currentProducts.filter((product) => product.name.toLowerCase().includes(nameSearch.toLowerCase()))
        setProductsData(nameFilter)
    };

    return (
        <div>
            <div className='search-product'>
                <Form.Control className="search-product-name" type="text" placeholder="Ingresar el nombre del producto" onChange={handleNameSearch} />
                <Button type="button" className="mb-3 mt-2 ps-5 pe-5 search-product-button" onClick={onHandleSearch}>Buscar</Button>
            </div>
            {user && user.userType !== 0 ?
                <div className='products-container'>
                    {currentProducts.map(item => (
                        <div className="product-item" key={item.id}>
                            <ProductsItem
                                item={item}
                            />
                        </div>
                    ))}
                </div> :
                <div className='products-container'>
                    {currentProducts.map(item => (
                        item.avaible &&
                        <div className="product-item" key={item.id}>
                            <ProductsItem
                                item={item}
                            />
                        </div>
                    ))}
                </div>}
            <div className="pagination">
                <Button
                    className="button button-change-page"
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                >{"<<"}</Button>
                <Button
                    className="button button-change-page"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >{"<"}</Button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`button button-change-page ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </Button>
                ))}
                <Button
                    className="button button-change-page"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >{">"}</Button>
                <Button
                    className="button button-change-page"
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                >{">>"}</Button>
            </div>
        </div>
    );
};

export default Products;
