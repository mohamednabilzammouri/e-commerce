import React, { useContext } from "react";
import { CategoriesContext } from "../../Context/Context";

function Category() {
  const Categories = useContext(CategoriesContext);
  console.log("category rerendered");

  return (
    <>
      {Categories.map((category) => (
        <>
          <h3>{/* {category.name}({category.articleCount}) */}</h3>
        </>
      ))}
    </>
  );
}

export default Category;
