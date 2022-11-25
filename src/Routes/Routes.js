import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Home/Products";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

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
        element: <Products></Products>,
        loader: ({ params }) => fetch(`data.json/${params.id}`)
      }
    ]
  }
])