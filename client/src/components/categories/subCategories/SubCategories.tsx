import React, { useCallback, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { CategoriesContext, RouteContext } from "../../../Context/Context";
import { SubCategoriesContainer, SubCategoryLink } from "./SubCategoryStyle";

export function SubCategories(): JSX.Element {
  const Categories = useContext(CategoriesContext);
  const setCurrentRoute = useContext(RouteContext);

  const handleRouteCHange = useCallback((CurrentRoute: string) => {
    setCurrentRoute(CurrentRoute);
    console.log("subcategory rendered");
  }, []);
  const currentPath = window.location.pathname;

  return (
    <SubCategoriesContainer>
      <BrowserRouter>
        {Categories[0]?.childrenCategories.map(({ name, urlPath }: any) => {
          return (
            <h3>
              <SubCategoryLink
                to={`/${urlPath}`}
                onClick={() => handleRouteCHange(urlPath)}
                isActive={currentPath === "/" + urlPath}
              >
                {name}
              </SubCategoryLink>
            </h3>
          );
        })}
      </BrowserRouter>
    </SubCategoriesContainer>
  );
}
