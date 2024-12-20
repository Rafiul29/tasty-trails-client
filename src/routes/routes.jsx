import { createBrowserRouter } from "react-router-dom";
import Error from "../components/ui/Error";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import MenuItemDetails from "../pages/MenuItemDetails";
import Favourite from "../pages/Favourite";
import Carts from "../pages/Carts";
import CartCheckout from "../pages/CartCheckout";
import Deposit from "../pages/Deposit";
import Profile from "../pages/Profile";
import AllOrders from "../pages/AllOrders";
import Orders from "../pages/Orders";
import AllMenu from "../pages/AllMenu";
import AddMenu from "../pages/AddMenu";
import Verified from "../pages/Verified";
import AccountActivation from "../pages/AccountActivation";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

import Registration from "../pages/Registration";
import PublicRoutes from "../routes/PublicRoutes";
import PrivetRoutes from "../routes/PrivetRoutes";
import AdminDashBoardLayout from "../Layout/AdminDashBoardLayout";
import AdminDashboard from "../Dashboard/admin/AdminDashboard";
import UserDashBoard from "../Dashboard/users/UserDashBoard";
import UserDashBoardLayout from "../Layout/UserDashBoardLayout";
import AdminRoutes from "./AdminRoutes";
import Success from "../pages/Success";
import Cancle from "../pages/Cancle";
import Fail from "../pages/Fail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout
    errorElement: <Error />, // Error page
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/menu/:id", element: <MenuItemDetails /> },
      { path: "/about", element: <About /> },
      { path: "/contact-us", element: <ContactUs /> },
      {
        path: "/favourite",
        element: (
          <PrivetRoutes>
            <Favourite />
          </PrivetRoutes>
        ),
      },
      {
        path: "/carts",
        element: (
          <PrivetRoutes>
            <Carts />
          </PrivetRoutes>
        ),
      },
      {
        path: "/cart/checkout",
        element: (
          <PrivetRoutes>
            <CartCheckout />
          </PrivetRoutes>
        ),
      },
      {
        path: "/deposit",
        element: (
          <PrivetRoutes>
            <Deposit />
          </PrivetRoutes>
        ),
      },

      {
        path: "/success",
        element: (
          <PrivetRoutes>
            <Success />
          </PrivetRoutes>
        ),
      },
      {
        path: "/cancle",
        element: (
          <PrivetRoutes>
            <Cancle />
          </PrivetRoutes>
        ),
      },
      {
        path: "/fail",
        element: (
          <PrivetRoutes>
            <Fail />
          </PrivetRoutes>
        ),
      },
      // public routes
      {
        path: "/verified",
        element: (
          <PublicRoutes>
            <Verified />
          </PublicRoutes>
        ),
      },

      {
        path: "/account-activation",
        element: (
          <PublicRoutes>
            <AccountActivation />
          </PublicRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoutes>
            <Registration />
          </PublicRoutes>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard/admin",
    element: <AdminDashBoardLayout />, // Main layout
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoutes>
            <AdminDashboard />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/all/menu",
        element: (
          <AdminRoutes>
            <AllMenu />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/add/menu",
        element: (
          <AdminRoutes>
            <AddMenu />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/all/orders",
        element: (
          <AdminRoutes>
            <AllOrders />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/profile",
        element: (
          <PrivetRoutes>
            <Profile />
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard/user",
    element: <UserDashBoardLayout />, // Main layout
    errorElement: <Error />,
    children: [
      { path: "/dashboard/user", element: <UserDashBoard /> },
      {
        path: "/dashboard/user/orders",
        element: (
          <PrivetRoutes>
            <Orders />
          </PrivetRoutes>
        ),
      },
      {
        path: "/dashboard/user/profile",
        element: (
          <PrivetRoutes>
            <Profile />
          </PrivetRoutes>
        ),
      },
    ],
  },
]);
