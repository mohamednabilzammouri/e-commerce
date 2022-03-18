import React from "react";
import { Article } from "../../../types";
import { ArticleCard } from "../articleCard/ArticleCard";
import { Articles } from "./DisplayArticlesStyle";

function DisplayArticles(props: any): any {
  return (
    <>
      <Articles>
        {props.Articles?.map((article: Article) => (
          <ArticleCard article={article} />
        ))}
      </Articles>
    </>
  );
}

export default DisplayArticles;
