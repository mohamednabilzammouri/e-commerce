import React from "react";
import useGetCategories from "../../hooks/useGetCategories";

function Category() {
  const [Categories] = useGetCategories();
  return (
    <>
      {Categories[0]?.name}
      {Categories[0]?.articleCount}
    </>
  );
}

export default Category;
