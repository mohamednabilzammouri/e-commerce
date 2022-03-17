import React from "react";
import "../../ProductList.css";
import { Article } from "../../types";
import { formatPrice } from "../utils/Formatter";

export var ArticleCard = ({ article }: { article: Article }): any => {
  const imagePath = article.images[0].path;
  const articleName = article.name;
  const price = article.prices.regular.value;
  const formattedPrice = formatPrice(price);

  return (
    <div className={"article"}>
      <img alt="" src={imagePath} />
      <div>{articleName}</div>
      <div>{formattedPrice}</div>
      <section role="button">Add to cart</section>
    </div>
  );
};
