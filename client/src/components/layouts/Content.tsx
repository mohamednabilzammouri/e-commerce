import React, { useContext } from "react";
import { AppContext } from "../../Context/Context";
import { getArticlesFromPath } from "../../services/ArticlesServices";

import DisplayArticles from "../articles/DisplayArticles";

function Content() {
  const Categories = useContext(AppContext);

  // console.log(Categories);
  // console.log(window.location.pathname);

  const articles = getArticlesFromPath(window.location.pathname, Categories[0]);
  // console.log("aaaa :", articles);

  return (
    <>
      <DisplayArticles Articles={articles} />
    </>
  );
}
export default Content;
