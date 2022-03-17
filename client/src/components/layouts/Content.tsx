import React from "react";
import useGetCategories from "../../hooks/useGetCategories";
import { getArticlesFromPath } from "../../services/ArticlesServices";

import DisplayArticles from "../articles/DisplayArticles";

function Content() {
  const [Categories] = useGetCategories();
  console.log(Categories[0]);
  console.log(window.location.pathname);

  const articles = getArticlesFromPath(window.location.pathname, Categories[0]);
  console.log("aaaa :", articles);

  return (
    <>
      <DisplayArticles Articles={articles} />{" "}
    </>
  );
}
export default Content;
