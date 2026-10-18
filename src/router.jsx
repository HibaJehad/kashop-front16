import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Registor from "./pages/registor/Registor";
import Product from "./pages/products/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
          index: true,
          element: <Home />
            
        },
        {
          path: "products",
          element: <Product />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Registor />
        }

    ]
  },
]);
