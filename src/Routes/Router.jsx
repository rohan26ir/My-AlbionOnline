import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Shared/Error/Error";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import MarketPrices from "../Pages/MarketPrices/MarketPrices";

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
        path: "MarketPrices",
        element: <MarketPrices></MarketPrices>
      }
    ]
  },
]);

