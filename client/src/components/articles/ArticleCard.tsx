import React from "react";
import "../../ProductList.css";
import {
  getArticleImage,
  getArticleName,
  getArticlePrice,
} from "../../services/ArticlesServices";
import { Article } from "../../types";

export var ArticleCard = ({ article }: { article: Article }): any => {
  //  getArticleImage accepts 1 argument: you pass article as argument you
  //  get that article's image path as result
  let imagePath = getArticleImage(article);

  //getArticleName accepts 1 argument: you pass article as argument you get that article's name  as result
  let articleName = getArticleName(article);

  //getArticlePrice accepts 1 argument: you pass article as argument you get that article's price  as result
  let articlePrice = getArticlePrice(article);
  return (
    <div className={"article"}>
      <img alt="" src={imagePath} />
      <div>{articleName}</div>
      <div>{articlePrice}</div>
      <section role="button">Add to cart</section>
    </div>
  );
};
