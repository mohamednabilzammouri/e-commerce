import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { CategoriesContext, RouteContext } from "../../../Context/Context";
import { ChildCategory } from "../../../types/types";
import { SubCategoriesContainer, SubCategoryLink } from "./SubCategoryStyle";

export function SubCategories(): JSX.Element {
  const Categories = useContext(CategoriesContext);
  const setCurrentRoute = useContext(RouteContext);
  //handleRouteCHange will send the new route to the context api to be later compared to the routes coming from the api
  const handleRouteCHange = (CurrentRoute: string) => {
    setCurrentRoute(CurrentRoute);
    console.log("subcategory rendered");
  };
  const currentPath = window.location.pathname;

  return (
    <SubCategoriesContainer>
      <BrowserRouter>
        {Categories[0]?.childrenCategories.map(
          ({ name, urlPath }: ChildCategory) => {
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
          }
        )}
      </BrowserRouter>
    </SubCategoriesContainer>
  );
}
