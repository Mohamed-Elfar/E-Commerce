import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { Suspense } from "react";
import AuthView from "./components/AuthView/AuthView";
import Login from "./components/Login/Login";
import Wishlist from "./components/Wishlist/Wishlist";
import AllProducts from "./components/AllProducts/AllProducts";
import NotFound from "./components/NotFound/NotFound";
import CheckOut from './components/Checkout/Checkout';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          </Suspense>
        ),
      },
      {
        path: "home", 
        element: (
          <Suspense>
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense>
            <AuthView>
              <Login />
            </AuthView>
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
        ),
      },
      { path: "register", element: <RegistrationForm /> },
      {
        path: "product/:id",
        element: (
          <ProtectedRoutes>
            <SingleProduct />
          </ProtectedRoutes>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoutes>
            <Wishlist />
          </ProtectedRoutes>
        ),
      },
      {
        path: "allProducts",
        element: (
          <ProtectedRoutes>
            <AllProducts />
          </ProtectedRoutes>
        ),
      },
      { path: "checkout", element: <CheckOut /> },
      { path: "*", element: <NotFound /> }, 
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
