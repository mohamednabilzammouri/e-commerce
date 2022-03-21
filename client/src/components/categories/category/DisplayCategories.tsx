import React, { useContext } from "react";
import { categoriesID } from "../../../config";
import { IdContext } from "../../../Context/Context";
import { MyCategory, StyledCategories } from "./CategoryStyle";

function DisplayCategories() {
  console.log("category rerendered");
  const setCategoryId = useContext(IdContext);
  const handleId = function (id: number) {
    setCategoryId(id);
  };

  let MyCategories = [];
  for (let category in categoriesID) MyCategories.push(category);

  return (
    <StyledCategories>
      {Object.keys(categoriesID).map((key) => {
        return (
          <MyCategory
            onClick={() => {
              handleId(categoriesID[key as keyof typeof categoriesID]);
            }}
          >
            {key}
          </MyCategory>
        );
      })}
    </StyledCategories>
  );
}

export default DisplayCategories;
