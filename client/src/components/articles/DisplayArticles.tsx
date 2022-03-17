import React from "react";
import { Article } from "../../types";
import { ArticleCard } from "./ArticleCard";

function DisplayArticles(props: any): any {
  return (
    <>
      <div className={"articles"}>
        {props.Articles?.map((article: Article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </>
  );
}

export default DisplayArticles;
