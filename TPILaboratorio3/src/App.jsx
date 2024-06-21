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
import AddProducts from './components/addProducts/AddProducts';
import PayMethod from './components/payMethod/PayMethod';
import UpdateProducts from './components/updateProducts/UpdateProducts';
import Customers from './components/customers/Customers';
import UpdateCustomer from './components/updateCustomer/UpdateCustomer';
import DisplayCustomer from './components/displayCustomer/DisplayCustomer';
import DeleteCustomer from './components/deleteCustomer/DeleteCustomer';
import CreateCustomer from './components/createCustomer/CreateCustomer';
import Seller from './components/seller/Seller';
import CreateSeller from './components/createSeller/CreateSeller';
import DisplaySeller from './components/displaySeller/DisplaySeller';
import UpdateSeller from './components/updateSeller/UpdateSeller';
import DeleteSeller from './components/deleteSeller/DeleteSeller';
  
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
      path: "/nuevoProducto",
      element:
        <MainLayout children={<AddProducts />}>
        </MainLayout>
    },
    {
      path: "/paymethod",
      element:
        <MainLayout children={<PayMethod />}>
        </MainLayout>
    },
    {
      path: "/seller",
      element:
        <MainLayout children={<Seller />}>
        </MainLayout>
    },
    {
      path: "/createseller",
      element:
        <MainLayout children={<CreateSeller />}>
        </MainLayout>
    },
    {
      path: "/displayseller/:id",
      element:
        <MainLayout children={<DisplaySeller />}>
        </MainLayout>
    },
    {
      path: "/updateseller/:id",
      element:
        <MainLayout children={<UpdateSeller />}>
        </MainLayout>
    },
    {
      path: "/deleteseller/:id",
      element:
        <MainLayout children={<DeleteSeller />}>
        </MainLayout>
    },
    {
      path: "/customer",
      element:
        <MainLayout children={<Customers />}>
        </MainLayout>
    },
    {
      path: "/createcustomer",
      element:
        <MainLayout children={<CreateCustomer />}>
        </MainLayout>
    },
    {
      path: "/displaycustomer/:id",
      element:
        <MainLayout children={<DisplayCustomer />}>
        </MainLayout>
    },
    {
      path: "/updatecustomer/:id",
      element:
        <MainLayout children={<UpdateCustomer />}>
        </MainLayout>
    },
    {
      path: "/deletecustomer/:id",
      element:
        <MainLayout children={<DeleteCustomer />}>
        </MainLayout>
    },
    {
      path: "/updateproduct/:id",
      element:
        <MainLayout children={<UpdateProducts />}>
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
