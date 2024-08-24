import { useDispatch } from "react-redux";
import MenuCategory from "../components/category/MenuCategory";
import MenuDisplay from "../components/menu/MenuDisplay";
import Footer from "../components/common/Footer"
import { searchCategoryRemove } from "../features/category/categorySlice";

const Menu = () => {
  // remove category
  const dispatch = useDispatch();
  dispatch(searchCategoryRemove());

  return (
    <div className="main-padding  space-y-4">
      <MenuCategory />
      <MenuDisplay />
      <Footer/>
    </div>
  );
};

export default Menu;
