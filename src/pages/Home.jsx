import MenuCategory from "../components/category/MenuCategory";
import Footer from "../components/common/Footer";
import Hero from "../components/Hero/Hero";
import MenuDisplay from "../components/menu/MenuDisplay";

const Home = () => {
  return (
    <main className="pt-28">
    <Hero/>
    <div className="pt-5">
    <MenuCategory/>
    </div>
    <div className="space-y-10">
    <MenuDisplay/>
    <Footer/>
    </div>
    </main>
  );
};

export default Home;
