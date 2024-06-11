import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage/LandingPage';
import Register from './components/register/Register';
import Login from './components/login/Login';
import NotFound from './components/notFound/NotFound';
import MainLayout from './components/mainLayout/MainLayout';
import Products from './components/products/Products';
import ProductDetail from './components/productDetail/ProductDetail';
import Carrito from './components/carrito/Carrito';

  
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
            <LandingPage />
        </MainLayout>
      ),
    },
    {
      path: "/login",
      element:
        <MainLayout>
          <Login />
        </MainLayout>
    },
    {
      path: "/registrarse",
      element:
        <MainLayout>
            <Register />
        </MainLayout>
    },
    {
      path: "/productos",
      element:
        <MainLayout children={<Products />}>
        </MainLayout>
    },
    {
      path: "/carrito",
      element:
        <MainLayout children={<Carrito />}>
        </MainLayout>
    },
    {
      path: "/producto/:id",
      element:
        <MainLayout children={<ProductDetail />}>
        </MainLayout>
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div className="d-flex flex-column align-items-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
