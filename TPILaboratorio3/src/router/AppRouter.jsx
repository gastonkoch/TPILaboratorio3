// import {RouterProvidercreateBrowserRouter  } from 'react-router-dom'
// import Login from '../components/login/Login'
// import NavBar from '../components/navBar/NavBar'
// import HomeBorrar from '../components/homeBorrar/HomeBorrar'
// import Register from '../components/register/Register'
// import LandingPage from '../components/landingPage/LandingPage'
// import { useState } from 'react'
// import NotFound from '../components/notFound/NotFound'

// const AppRouter = () => {
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   const handleSignIn = () => {
//     setIsSignedIn(true);
//   };

//   const handleSignOut = () => {
//     setIsSignedIn(false);
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <NavBar>
//           <HomeBorrar/>
//         </NavBar>
//       ),
//     },
//     {
//       path: "/login",
//       element: (
//         // <Private isSignedIn={isSignedIn}>
//           <NavBar>
//             <Login
//             isSignedIn={isSignedIn}
//             onLogIn={handleSignIn}
//             onLogOut={handleSignOut}
//           />
//           </NavBar>
//         // </Private>
//       ),
//     },
//     {
//       path: "/register",
//       element: (
//         <NavBar>
//           <Register
//             isSignedIn={isSignedIn}
//             onLogIn={handleSignIn}
//             onLogOut={handleSignOut}
//           />
//         </NavBar>
//       ),
//     },
//     {
//       path: "/landingpage",
//       element: (
//         <NavBar>
//           <LandingPage />
//         </NavBar>
//       ),
//     },
//     {
//       path: "*",
//       element: <NotFound></NotFound>
//     },
//   ]);
//   return <RouterProvider router={router} />;
// }

// export default AppRouter