import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { CategoriesContext, RouteContext } from "../../../Context/Context";

function SubCategories(): JSX.Element {
  const Categories = useContext(CategoriesContext);
  const setCurrentRoute = useContext(RouteContext);
  const handleRouteCHange = function (CurrentRoute: string) {
    setCurrentRoute(CurrentRoute);
    console.log("sub rendered");
  };

  return (
    <ul style={{ marginTop: "6em" }}>
      <BrowserRouter>
        {Categories[0]?.childrenCategories.map(({ name, urlPath }) => {
          return (
            <h3>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "0.5em",
                }}
                to={`/${urlPath}`}
                onClick={() => handleRouteCHange(urlPath)}
              >
                {name}
              </Link>
            </h3>
          );
        })}
      </BrowserRouter>
    </ul>
  );
}

export default SubCategories;
