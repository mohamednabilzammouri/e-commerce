import React from "react";
import { Article } from "../../../types";
import { ArticleCard } from "../articleCard/ArticleCard";
import { Articles } from "./DisplayArticlesStyle";

function DisplayArticles(props: any): JSX.Element {
  console.log(props, "nabil");

  return (
    <>
      {props.Articles === undefined ? (
        <></>
      ) : (
        <Articles>
          {props.Articles?.map((article: Article) => (
            <ArticleCard article={article} />
          ))}
        </Articles>
      )}
    </>
  );
}

export default DisplayArticles;
