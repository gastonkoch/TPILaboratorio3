import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar/NavBar';
import HomeBorrar from './components/homeBorrar/HomeBorrar';
import LandingPage from './components/landingPage/LandingPage';
import Register from './components/register/Register';
import Login from './components/login/Login';
import NotFound from './components/notFound/NotFound';


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    //test
  };


  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <NavBar>
          <HomeBorrar />
        </NavBar>
      ),
    },
    {
      path: '/login',
      element: (
        <NavBar>
          <Login
            isSignedIn={isSignedIn}
            onLogIn={handleSignIn}
            onLogOut={handleSignOut}
          />
        </NavBar>
      ),
    },
    {
      path: '/register',
      element: (
        <NavBar>
          <Register
            isSignedIn={isSignedIn}
            onLogIn={handleSignIn}
            onLogOut={handleSignOut}
          />
        </NavBar>
      ),
    },
    {
      path: '/landingpage',
      element: (
        <NavBar>
          <LandingPage />
        </NavBar>
      ),
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]) ;

  return <RouterProvider router={routes}/>;

  
}

export default App
