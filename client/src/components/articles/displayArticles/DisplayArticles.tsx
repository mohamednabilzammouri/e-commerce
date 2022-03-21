import React from "react";
import { Article } from "../../../types/types";
import Error from "../../Error/Error";
import Spinner from "../../Loader/Loader";

import { ArticleCard } from "../articleCard/ArticleCard";
import { Articles } from "./DisplayArticlesStyle";

interface DisplayArticlesPropsType {
  ArticlesLoaderAndError: {
    DisplayedArticles: Article[] | undefined;
    loader: Boolean;
    error: Boolean;
  };
}

function DisplayArticles(props: DisplayArticlesPropsType): JSX.Element {
  const { DisplayedArticles, loader, error } = props.ArticlesLoaderAndError;
  return (
    <>
      {error ? (
        <Error />
      ) : loader ? (
        <Spinner />
      ) : (
        <>
          <Articles>
            {DisplayedArticles?.map((article: Article) => (
              <ArticleCard article={article} />
            ))}
          </Articles>
        </>
      )}
    </>
  );
}

export default DisplayArticles;
