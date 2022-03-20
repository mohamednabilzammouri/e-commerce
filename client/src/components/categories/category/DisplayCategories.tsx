import React, { useContext } from "react";
import { categoriesID } from "../../../config";
import { SearchContext } from "../../../Context/Context";
import { MyCategory, StyledCategories } from "./CategoryStyle";

function DisplayCategories() {
  const setSearch = useContext(SearchContext);
  console.log("category rerendered");

  return (
    <StyledCategories>
      <MyCategory>Lampen</MyCategory>
      <MyCategory>Accessoires</MyCategory>
      <MyCategory>Textilien</MyCategory>
    </StyledCategories>
  );
}

export default DisplayCategories;
