import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Shared/Error/Error";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import MarketPrices from "../Pages/MarketPrices/MarketPrices";
import LogIn from "../Account/LogIn/LogIn";
import CreateUser from "../Account/CreateUser/CreateUser";
import PrivateRoute from "./PrivateRoute";
import ProfileSetting from "../Pages/Profile/ProfileSetting";
import Profile from "../Pages/Profile/Profile";
import AdminLayout from "../AdminBoard/Layout/AdminLayout";
import Dashboard from "../AdminBoard/Pages/Dashboard/Dashboard";
import AllUsers from "../AdminBoard/Pages/AllUsers/AllUsers";
import Liked from "../AdminBoard/Pages/Liked/Liked";
import AddItem from "../AdminBoard/Pages/AddItem/AddItem";
import Guild from "../AdminBoard/Pages/Guild/Guild";
import House from "../AdminBoard/Pages/House/House";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/signin", element: <LogIn /> },
      { path: "/signup", element: <CreateUser /> },
      {
        path: "/MarketPrices",
        element: <PrivateRoute><MarketPrices /></PrivateRoute>,
      },
      {
        path: "/Profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: "/ProfileSetting",
        element: <PrivateRoute><ProfileSetting /></PrivateRoute>,
      },
      {
        path: "/AdminBoard",
        element: <PrivateRoute><AdminLayout /></PrivateRoute>,
        errorElement: <Error />, // Ensure error handling works for admin routes
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "all-users", element: <AllUsers /> },
          { path: "liked", element: <Liked /> },
          { path: "add-item", element: <AddItem /> },
          { path: "guild", element: <Guild /> },
          { path: "house", element: <House /> },
        ],
      },
    ],
  },
]);
