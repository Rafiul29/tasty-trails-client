import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

import { Route, Routes } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import Home from "./pages/Home";
import PublicRoutes from "./routes/PublicRoutes";
import Menu from "./pages/Menu";
import MenuItemDetails from "./pages/MenuItemDetails";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div>Checking authentication</div>
  ) : (
    <>
      <Navbar />
      <main className="pt-28">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/menu/:id" element={<MenuItemDetails/>} />
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
      </main>
      {/* <Header /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
