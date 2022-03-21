import React, { useContext } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { categoriesID } from "../../../config";
import { IdContext } from "../../../Context/Context";
import { MyCategory, StyledCategories } from "./CategoryStyle";

function DisplayCategories() {
  const setCategoryId = useContext(IdContext);
  //handleId will send the id of the category to the context API to be used in App.tsx
  const handleId = function (id: number) {
    setCategoryId(id);
  };

  return (
    <StyledCategories>
      <BrowserRouter>
        {Object.keys(categoriesID).map((key) => {
          return (
            <Link to={"/"}>
              <MyCategory
                onClick={() => {
                  handleId(categoriesID[key as keyof typeof categoriesID]);
                }}
              >
                {key}
              </MyCategory>
            </Link>
          );
        })}
      </BrowserRouter>
    </StyledCategories>
  );
}

export default DisplayCategories;
