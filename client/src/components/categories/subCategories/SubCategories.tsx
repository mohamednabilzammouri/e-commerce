import React from "react";
import useGetCategories from "../../../hooks/useGetCategories";

function SubCategories() {
  const [Categories] = useGetCategories();

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
