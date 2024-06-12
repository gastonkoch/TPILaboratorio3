import { Link } from 'react-router-dom';
import { useContext } from 'react';
import "./LandingPage.css"
import Carrousel from '../carrousel/Carrousel';
import Products from '../products/Products';


const LandingPage = () => {
    
    return (
        <>
           <Products/>
        </>
    )
}

export default LandingPage