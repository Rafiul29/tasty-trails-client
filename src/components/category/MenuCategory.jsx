import Loading from "../ui/Loading";

import { useGetCategoriesQuery } from "../../features/category/categoryApi";
import Error from "../ui/Error";
import MenuCategoryCard from "./MenuCategoryCard";
import { useDispatch } from "react-redux";
import { searchCategoryRemove } from "../../features/category/categorySlice";

const MenuCategory = () => {
  const {
    data: categoryMenuList,
    isLoading,
    isError,
    error,
  } = useGetCategoriesQuery();
  let content = null;

  const dispatch = useDispatch();


  const handleAllMenu = () => {
    dispatch(searchCategoryRemove());
  };

  
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message={error?.data} />;
  } else if (!isLoading && !isError && categoryMenuList?.length === 0) {
    content = <div>No menu category found</div>;
  } else if (!isLoading && !isError && categoryMenuList.length > 0) {
    content = (
      <>
        <h2 onClick={handleAllMenu}>All Menu</h2>
        {categoryMenuList.map((category, i) => (
          <MenuCategoryCard key={i} category={category} />
        ))}
      </>
    );
  }

  return <div className="flex gap-2">{content}</div>;
};

export default MenuCategory;
