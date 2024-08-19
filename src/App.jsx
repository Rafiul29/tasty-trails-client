import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Registration  from "./pages/Registration";
import Login  from "./pages/Login";

import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
      <Routes>
        {/* <Route exact path='/' element={<Home/>} /> */}
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Registration/>} />
      </Routes>
      </main>
      {/* <Header /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
