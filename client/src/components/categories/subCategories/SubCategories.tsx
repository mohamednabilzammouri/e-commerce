import React, { useContext } from "react";
import { AppContext } from "../../../Context/Context";
import useGetCategories from "../../../hooks/useGetCategories";

function SubCategories() {
  const Categories = useContext(AppContext);

  return (
    <ul>
      {Categories[0]?.childrenCategories.map(({ name, urlPath }) => {
        return (
          <li>
            <a href={`/${urlPath}`}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default SubCategories;
