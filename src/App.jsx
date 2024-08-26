import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

import { Route, Routes } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import Home from "./pages/Home";
import PublicRoutes from "./routes/PublicRoutes";
import PrivetRoutes from "./routes/PrivetRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import Menu from "./pages/Menu";
import MenuItemDetails from "./pages/MenuItemDetails";
import Loading from "./components/ui/Loading";
import Favourite from "./pages/Favourite";
import Carts from "./pages/Carts";
import CartCheckout from "./pages/CartCheckout";
import Orders from "./pages/Orders";
import AllOrders from "./pages/AllOrders";
import AddMenu from "./pages/AddMenu";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs.jsx";
import Profile from "./pages/Profile.jsx";
import AllMenu from "./pages/AllMenu.jsx";


function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div className="min-h-screen flex justify-center items-center">
      <Loading />
    </div>
  ) : (
    <>
      <Navbar />
      <Routes>
        {/*always public */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/menu/:id" element={<MenuItemDetails />} />
        {/* always privet */}
        <Route
          exact
          path="favourite"
          element={
            <PrivetRoutes>
              <Favourite />
            </PrivetRoutes>
          }
        />
        <Route
          exact
          path="carts"
          element={
            <PrivetRoutes>
              <Carts />
            </PrivetRoutes>
          }
        />
        <Route
          exact
          path="cart/checkout"
          element={
            <PrivetRoutes>
              <CartCheckout />
            </PrivetRoutes>
          }
        />
        <Route
          exact
          path="orders"
          element={
            <PrivetRoutes>
              <Orders />
            </PrivetRoutes>
          }
        />

        <Route
          exact
          path="/profile"
          element={
            <PrivetRoutes>
              <Profile />
            </PrivetRoutes>
          }
        />

        {/* always admin */}
        <Route
          exact
          path="all/orders"
          element={
            <AdminRoutes>
              <AllOrders />
            </AdminRoutes>
          }
        />

        <Route
          exact
          path="all/menu"
          element={
            <AdminRoutes>
              <AllMenu />
            </AdminRoutes>
          }
        />
        <Route
          exact
          path="add/menu"
          element={
            <AdminRoutes>
              <AddMenu />
            </AdminRoutes>
          }
        />

        {/*some times public */}
        <Route
          exact
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <PublicRoutes>
              <Registration />
            </PublicRoutes>
          }
        />
        <Route exact path="/about" element={<About />} />

        <Route exact path="/contact-us" element={<ContactUs />} />
      </Routes>

      {/* <Header /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
