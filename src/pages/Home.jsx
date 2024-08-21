import MenuCategory from "../components/category/MenuCategory";
import Hero from "../components/Hero/Hero";
import MenuDisplay from "../components/menu/MenuDisplay";

const Home = () => {
  return (
    <div className="pt-28">
    <Hero/>
    <MenuCategory/>
    <MenuDisplay/>
    </div>
  );
};

export default Home;
