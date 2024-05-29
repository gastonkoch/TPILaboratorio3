import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import LandingPage from './components/landingPage/LandingPage';
import Register from './components/register/Register';
import Login from './components/login/Login';
import NotFound from './components/notFound/NotFound';
import MainLayout from './components/mainLayout/MainLayout';

  
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
      // element: <Register />,
      element:
        <MainLayout>
            <Register />
        </MainLayout>
    },
    {
      path: "/productos",
      // element: <LandingPage />,
      element:
        <MainLayout children={<LandingPage />}>
            {/* <Register /> */}
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
