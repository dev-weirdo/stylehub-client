import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import AddProduct from "../pages/AddProduct";
import AllProducts from "../pages/AllProducts";
import DashboardHome from "../pages/DashboardHome";
import UserProfile from "../pages/UserProfile";
import EditProduct from "../pages/EditProduct";
import Products from "../pages/Products";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },{
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/user",
        element: <UserProfile />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("https://stylehub-server.onrender.com/products"),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/allproducts",
        element: <AllProducts />,
        loader: () => fetch("https://stylehub-server.onrender.com/products"),
      },
      {
        path: "/dashboard/allproducts/edit/:id",
        element: <EditProduct />,
        loader: ({ params }) =>
          fetch(`https://stylehub-server.onrender.com/products/${params.id}`),
      },
      {
        path: "/dashboard/home",
        element: <DashboardHome />,
      },
    ],
  },
]);

export default router;
