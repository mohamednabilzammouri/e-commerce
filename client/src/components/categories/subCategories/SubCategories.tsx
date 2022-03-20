import React, { useCallback, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { CategoriesContext, RouteContext } from "../../../Context/Context";
import { SubCategoryLink } from "./SubCategoryStyle";

export function SubCategories(): JSX.Element {
  const Categories = useContext(CategoriesContext);
  const setCurrentRoute = useContext(RouteContext);

  const handleRouteCHange = useCallback((CurrentRoute: string) => {
    setCurrentRoute(CurrentRoute);
    console.log("subcategory rendered");
  }, []);

  return (
    <ul>
      <BrowserRouter>
        {Categories[0]?.childrenCategories.map(({ name, urlPath }) => {
          return (
            <h3>
              <SubCategoryLink
                to={`/${urlPath}`}
                onClick={() => handleRouteCHange(urlPath)}
              >
                {name}
              </SubCategoryLink>
            </h3>
          );
        })}
      </BrowserRouter>
    </ul>
  );
}
