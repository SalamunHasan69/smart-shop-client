import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import MyOrders from "../Pages/DashboardLayout/MyOrders/MyOrders";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ProductsCard from "../Pages/Home/ProductsCard";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/products/:id',
        element: <PrivateRoute><ProductsCard></ProductsCard></PrivateRoute>,
        loader: ({ params }) => fetch(`https://smart-shop-server-salamunhasan69.vercel.app/products/${params.id}`)
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard',
        element: <MyOrders></MyOrders>
      }
    ]
  }
])