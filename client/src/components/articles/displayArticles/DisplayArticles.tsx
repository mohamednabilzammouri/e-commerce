import React from "react";
import { Article } from "../../../types";
import Spinner from "../../utils/Loader/Loader";
import { ArticleCard } from "../articleCard/ArticleCard";
import { Articles } from "./DisplayArticlesStyle";

function DisplayArticles(props: any): JSX.Element {
  console.log(props, "nabil");

  return (
    <>
      {props.Articles === undefined ? (
        <Spinner />
      ) : (
        <>
          <Articles>
            {props.Articles?.map((article: Article) => (
              <ArticleCard article={article} />
            ))}
          </Articles>
        </>
      )}
    </>
  );
}

export default DisplayArticles;
