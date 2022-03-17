import React, { useContext } from "react";
import { CategoriesContext } from "../../Context/Context";
import { getChildrenArticlesFromPath } from "../../services/ArticlesServices";
import DisplayArticles from "../articles/DisplayArticles";

function Content() {
  const Categories = useContext(CategoriesContext);
  const Articles = getChildrenArticlesFromPath(
    window.location.pathname,
    Categories[0]
  );

  return (
    <>
      <DisplayArticles Articles={Articles} />
    </>
  );
}
export default Content;
