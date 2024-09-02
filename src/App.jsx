import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

import { Route, Routes } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import Home from "./pages/Home";

import PublicRouters from './routes/PublicRoutes.jsx'
import PrivetRouters from './routes/PrivetRoutes.jsx'
import AdminRouters from './routes/AdminRoutes.jsx'

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
import Deposit from "./pages/Deposit.jsx";
import useScrollToTop from "./hooks/useScrollToTop.js";
import Partice from "./pages/Partice.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  useScrollToTop()
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
       <Route exact path="/p" element={<Partice />} />
       <Route exact path="/menu" element={<Menu />} />
       <Route exact path="/menu/:id" element={<MenuItemDetails />} />
        {/* always privet */}
       <Route
          exact
          path="favourite"
          element={
            <PrivetRouters>
              <Favourite />
            </PrivetRouters>
          }
        />
       <Route
          exact
          path="carts"
          element={
            <PrivetRouters>
              <Carts />
            </PrivetRouters>
          }
        />
       <Route
          exact
          path="cart/checkout"
          element={
            <PrivetRouters>
              <CartCheckout />
            </PrivetRouters>
          }
        />
       <Route
          exact
          path="orders"
          element={
            <PrivetRouters>
              <Orders />
            </PrivetRouters>
          }
        />

       <Route
          exact
          path="/profile"
          element={
            <PrivetRouters>
              <Profile />
            </PrivetRouters>
          }
        />
       <Route
          exact
          path="/deposit"
          element={
            <PrivetRouters>
              <Deposit />
            </PrivetRouters>
          }
        />
        {/* always admin */}
       <Route
          exact
          path="all/orders"
          element={
            <AdminRouters>
              <AllOrders />
            </AdminRouters>
          }
        />

       <Route
          exact
          path="all/menu"
          element={
            <AdminRouters>
              <AllMenu />
            </AdminRouters>
          }
        />
       <Route
          exact
          path="add/menu"
          element={
            <AdminRouters>
              <AddMenu />
            </AdminRouters>
          }
        />

        {/*some times public */}
       <Route
          exact
          path="/login"
          element={
            <PublicRouters>
              <Login />
            </PublicRouters>
          }
        />
       <Route
          exact
          path="/register"
          element={
            <PublicRouters>
              <Registration />
            </PublicRouters>
          }
        />
         <Route
          exact
          path="*"
          element={
            <NotFound/>
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
