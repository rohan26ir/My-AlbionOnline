import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Shared/Error/Error";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import MarketPrices from "../Pages/MarketPrices/MarketPrices";
import LogIn from "../Account/LogIn/LogIn";
import CreateUser from "../Account/CreateUser/CreateUser";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: "/MarketPrices",
        element: <MarketPrices></MarketPrices>
      },
      {
        path: "/signin",
        element: <LogIn></LogIn>
      },
      {
        path: "/signup",
        element: <CreateUser></CreateUser>
      }
    ]
  },
]);

