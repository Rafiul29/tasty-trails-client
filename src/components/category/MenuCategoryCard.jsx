
import { useDispatch } from "react-redux";
import { searchCategory } from "../../features/category/categorySlice";

const MenuCategoryCard = ({ category }) => {
  const { id, name, slug, image } = category || {};

  console.log(id, name, slug, image);
  const dispatch = useDispatch();

  const handeCategorySearch = (name) => {
    dispatch(searchCategory({ name: name }));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-1  bg-orange-50 hover:bg-orange-100 p-2 duration-500 border border-orange-100 hover:border-orange-200 rounded-md cursor-pointer h-30 w-20"
    onClick={() => handeCategorySearch(name)}>
      <div
        className="overflow-hidden  h-16 w-16 "
      >
        <img
          className="w-full h-full  object-cover rounded-full"
          src={image}
          alt={name}
        />
      </div>
      <p className="text-center capitalize">{name}</p>
    </div>
  );
};

export default MenuCategoryCard;
