import React, { useEffect, useState } from "react";
import {
  getCategoryArticlesArray,
  getChildrenCategoryArray,
  getFirstNElements,
} from "../../services/ArticlesServices";
import { Article } from "../../types";
import { ArticleCard } from "./ArticleCard";

function DisplayArticles(): any {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    // getFirstNElements accepts 1 argument wich is the first n elements of the categories list

    getFirstNElements(60).then((res) => {
      //getCategoryArticlesArray accepts 1 argument: you pass the server response as argument you get a list
      // of all Articles as result
      const articleArray: Article[] = getCategoryArticlesArray(res, 0);
      setArticles(articleArray);
      console.log("Article Array :", res.data.data.categories);
      console.log("children :", getChildrenCategoryArray(res, 0));
    });
  }, []);

  return (
    <>
      <div className={"articles"}>
        {articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </>
  );
}

export default DisplayArticles;
