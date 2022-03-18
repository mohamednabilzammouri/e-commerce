import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { CategoriesContext, RouteContext } from "../../../Context/Context";

function SubCategories() {
  const Categories = useContext(CategoriesContext);
  const setCurrentRoute = useContext(RouteContext);
  const handleRouteCHange = function (CurrentRoute: string) {
    setCurrentRoute(CurrentRoute);
  };

  return (
    <ul>
      <BrowserRouter>
        {Categories[0]?.childrenCategories.map(({ name, urlPath }) => {
          return (
            <li>
              <Link
                to={`/${urlPath}`}
                onClick={() => handleRouteCHange(urlPath)}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </BrowserRouter>
    </ul>
  );
}

export default SubCategories;
