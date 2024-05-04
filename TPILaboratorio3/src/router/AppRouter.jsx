import { Route,Routes } from 'react-router-dom'
import Login from '../components/login/Login'
import NavBar from '../components/navBar/NavBar'
import HomeBorrar from '../components/homeBorrar/HomeBorrar'
import Register from '../components/register/Register'
import LandingPage from '../components/landingPage/LandingPage'
import Products from '../components/products/Products'

const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<NavBar/>}>
                <Route index element={<HomeBorrar/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='landingpage' element={<LandingPage/>}/>
                <Route path='products' element={<Products/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default AppRouter