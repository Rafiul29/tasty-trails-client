import { useDispatch } from "react-redux";
import MenuCategory from "../components/category/MenuCategory";
import MenuDisplay from "../components/menulist/MenuDisplay";
import { searchCategoryRemove } from "../features/category/categorySlice";

const Menu = () => {
  // remove category
  const dispatch = useDispatch();
  dispatch(searchCategoryRemove());

  return (
    <div className="wrapper">
      <MenuCategory />
      <MenuDisplay />
    </div>
  );
};

export default Menu;
