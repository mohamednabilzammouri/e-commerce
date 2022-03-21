import React from "react";
import { Article } from "../../../types";
import Error from "../../utils/Error/Error";
import Spinner from "../../utils/Loader/Loader";
import { ArticleCard } from "../articleCard/ArticleCard";
import { Articles } from "./DisplayArticlesStyle";

function DisplayArticles(props: any): JSX.Element {
  console.log(props, "nabil");

  return (
    <>
      {props.ArticlesLoaderAndError.error ? (
        <Error />
      ) : props.ArticlesLoaderAndError.loader ? (
        <Spinner />
      ) : (
        <>
          <Articles>
            {props.ArticlesLoaderAndError.Articles?.map((article: Article) => (
              <ArticleCard article={article} />
            ))}
          </Articles>
        </>
      )}
    </>
  );
}

export default DisplayArticles;
