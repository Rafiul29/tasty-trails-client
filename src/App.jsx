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
import Menu from "./pages/Menu";
import MenuItemDetails from "./pages/MenuItemDetails";
import Loading from "./components/ui/Loading";
import Favourite from "./pages/Favourite";
import Carts from "./pages/Carts";
import CartCheckout from "./pages/CartCheckout";

// https://lottie.host/c22c41cc-945d-4128-91cb-e1282306e4b7/DEzt4GBIHb.json
// https://lottie.host/a959a4d2-6df4-461d-ac5c-f0e82df01c05/N83XjzAzm4.json
// https://lottie.host/a9f57bd4-918a-420f-9741-ba7fc5993a8d/jcHPusOXoq.json
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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/menu/:id" element={<MenuItemDetails />} />
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
      </Routes>

      {/* <Header /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
