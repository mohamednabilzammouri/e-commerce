import React from "react";
import { Article } from "../../../types/types";
import { formatPrice } from "../../../utils/Formatter";
import { AddToCart, Image, Item, Name, Price } from "./ArticleCardStyle";

export var ArticleCard = ({ article }: { article: Article }): JSX.Element => {
  const imagePath = article.images[0].path;
  const articleName = article.name;
  const price = article.prices.regular.value;
  const formattedPrice = formatPrice(price);

  return (
    <Item>
      <Image alt="" src={imagePath} />
      <Name>{articleName}</Name>
      <Price>{formattedPrice}</Price>
      <AddToCart>Add to cart</AddToCart>
    </Item>
  );
};
