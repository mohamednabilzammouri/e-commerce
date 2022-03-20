import React from "react";
import { categoriesID } from "../../../config";
import { MyCategory, StyledCategories } from "./CategoryStyle";

function DisplayCategories() {
  console.log("category rerendered");
  let MyCategories = [];
  for (let category in categoriesID) MyCategories.push(category);

  return (
    <StyledCategories>
      {MyCategories.map((categoryName) => (
        <MyCategory>{categoryName} </MyCategory>
      ))}
    </StyledCategories>
  );
}

export default DisplayCategories;
