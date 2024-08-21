import MenuCategory from "../components/category/MenuCategory";
import Hero from "../components/Hero/Hero";
import MenuDisplay from "../components/menu/MenuDisplay";

const Home = () => {
  return (
    <main className="pt-28">
    <Hero/>
    <MenuCategory/>
    <MenuDisplay/>
    </main>
  );
};

export default Home;
