import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";


const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "home", element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "register", element: <RegistrationForm /> },

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
