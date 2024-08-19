import React from "react";
import { useGetCategoriesQuery } from "../../features/category/categoryApi";

const MenuCategory = () => {

  const { data, isLoading, isError, error } = useGetCategoriesQuery();
  console.log(data)
  return <div>MenuCategory</div>;
};

export default MenuCategory;
