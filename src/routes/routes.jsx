import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../components/ui/Error";
import Loading from "../components/ui/Loading";

// Layouts
import Main from "../Layout/Main";
import AdminDashBoardLayout from "../Layout/AdminDashBoardLayout";
import UserDashBoardLayout from "../Layout/UserDashBoardLayout";

// Lazy Loaded Pages
const Home = lazy(() => import("../pages/Home"));
const Menu = lazy(() => import("../pages/Menu"));
const MenuItemDetails = lazy(() => import("../pages/MenuItemDetails"));
const Favourite = lazy(() => import("../pages/Favourite"));
const Carts = lazy(() => import("../pages/Carts"));
const CartCheckout = lazy(() => import("../pages/CartCheckout"));
const Deposit = lazy(() => import("../pages/Deposit"));
const Profile = lazy(() => import("../pages/Profile"));
const AllOrders = lazy(() => import("../pages/AllOrders"));
const Orders = lazy(() => import("../pages/Orders"));
const AllMenu = lazy(() => import("../pages/AllMenu"));
const AddMenu = lazy(() => import("../pages/AddMenu"));
const Verified = lazy(() => import("../pages/Verified"));
const AccountActivation = lazy(() => import("../pages/AccountActivation"));
const About = lazy(() => import("../pages/About"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Login = lazy(() => import("../pages/Login"));
const Registration = lazy(() => import("../pages/Registration"));
const Success = lazy(() => import("../pages/Success"));
const Cancle = lazy(() => import("../pages/Cancle"));
const Fail = lazy(() => import("../pages/Fail"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Dashboard Components
const AdminDashboard = lazy(() => import("../Dashboard/admin/AdminDashboard"));
const UserDashBoard = lazy(() => import("../Dashboard/users/UserDashBoard"));

// Route Wrappers
import PublicRoutes from "../routes/PublicRoutes";
import PrivetRoutes from "../routes/PrivetRoutes";
import AdminRoutes from "./AdminRoutes";

// Helper component for Suspense
const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={
    <div className="min-h-screen flex justify-center items-center">
      <Loading />
    </div>
  }>
    {children}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout
    errorElement: <Error />, // Error page
    children: [
      { path: "/", element: <SuspenseWrapper><Home /></SuspenseWrapper> },
      { path: "/menu", element: <SuspenseWrapper><Menu /></SuspenseWrapper> },
      { path: "/menu/:id", element: <SuspenseWrapper><MenuItemDetails /></SuspenseWrapper> },
      { path: "/about", element: <SuspenseWrapper><About /></SuspenseWrapper> },
      { path: "/contact-us", element: <SuspenseWrapper><ContactUs /></SuspenseWrapper> },
      {
        path: "/favourite",
        element: (
          <PrivetRoutes>
            <SuspenseWrapper><Favourite /></SuspenseWrapper>
          </PrivetRoutes>
        ),
      },
      {
        path: "/carts",
        element: (
          <PrivetRoutes>
            <SuspenseWrapper><Carts /></SuspenseWrapper>
          </PrivetRoutes>
        ),
      },
      {
        path: "/cart/checkout",
        element: (
          <PrivetRoutes>
            <SuspenseWrapper><CartCheckout /></SuspenseWrapper>
          </PrivetRoutes>
        ),
      },
      {
        path: "/deposit",
        element: (
          <PrivetRoutes>
            <SuspenseWrapper><Deposit /></SuspenseWrapper>
          </PrivetRoutes>
        ),
      },

      {
        path: "/success",
        element: (
          <PrivetRoutes>
            <SuspenseWrapper><Success /></SuspenseWrapper>
          </PrivetRoutes>
        ),
      },
      {
        path: "/cancle",
        element: (
          <PrivetRoutes>
            <SuspenseWrapper><Cancle /></SuspenseWrapper>
          </PrivetRoutes>
        ),
      },
      {
        path: "/fail",
        element: (
          <PrivetRoutes>
            <SuspenseWrapper><Fail /></SuspenseWrapper>
          </PrivetRoutes>
        ),
      },
      // public routes
      {
        path: "/verified",
        element: (
          <PublicRoutes>
            <SuspenseWrapper><Verified /></SuspenseWrapper>
          </PublicRoutes>
        ),
      },

      {
        path: "/account-activation",
        element: (
          <PublicRoutes>
            <SuspenseWrapper><AccountActivation /></SuspenseWrapper>
          </PublicRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoutes>
            <SuspenseWrapper><Login /></SuspenseWrapper>
          </PublicRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoutes>
            <SuspenseWrapper><Registration /></SuspenseWrapper>
          </PublicRoutes>
        ),
      },
      {
        path: "*",
        element: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
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
            <SuspenseWrapper><AdminDashboard /></SuspenseWrapper>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/all/menu",
        element: (
          <AdminRoutes>
            <SuspenseWrapper><AllMenu /></SuspenseWrapper>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/add/menu",
        element: (
          <AdminRoutes>
            <SuspenseWrapper><AddMenu /></SuspenseWrapper>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/all/orders",
        element: (
          <AdminRoutes>
            <SuspenseWrapper><AllOrders /></SuspenseWrapper>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/profile",
        element: (
          <PrivetRoutes>
            <SuspenseWrapper><Profile /></SuspenseWrapper>
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
      { path: "/dashboard/user", element: <SuspenseWrapper><UserDashBoard /></SuspenseWrapper> },
      {
        path: "/dashboard/user/orders",
        element: (
          <PrivetRoutes>
            <SuspenseWrapper><Orders /></SuspenseWrapper>
          </PrivetRoutes>
        ),
      },
      {
        path: "/dashboard/user/profile",
        element: (
          <PrivetRoutes>
            <SuspenseWrapper><Profile /></SuspenseWrapper>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);
