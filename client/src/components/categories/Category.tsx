import React, { useContext } from "react";
import { AppContext } from "../../Context/Context";

function Category() {
  const Categories = useContext(AppContext);

  return (
    <>
      {Categories[0]?.name}
      {Categories[0]?.articleCount}
    </>
  );
}

export default Category;
