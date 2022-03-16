import axios, { AxiosResponse } from "axios";
import { formatter } from "../components/utils/Formatter";
import { Article, ChildCategory } from "../types";

// categoriesQuery accepts 1 argument wich is the first n elements of the categories list
let categoriesQuery = (n: number): string => {
  return `{
  categories(ids: "156126", locale: de_DE) {
    name
    articleCount
    childrenCategories {
      name
      urlPath
    }
    categoryArticles(first: ${n}) {
      articles {
        name
        variantName
        prices {
          currency
          regular {
            value
          }
        }
        images(
          format: WEBP
          maxWidth: 200
          maxHeight: 200
          limit: 1
        ) {
          path
        }
      }
    }
  }
}`;
};

// getFirstNElements accepts 1 argument wich is the first n elements of the categories list
export let getFirstNElements = function (
  n: number
): Promise<AxiosResponse<any, any>> {
  return axios.post(
    "/graphql",
    JSON.stringify({
      query: categoriesQuery(n),
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

//getArticleImage accepts 1 argument: you pass article as argument you get that article's image path as result
export let getArticleImage = function (article: Article): any {
  return article.images[0].path;
};

//getArticleName accepts 1 argument: you pass article as argument you get that article's name  as result

export let getArticleName = function (article: Article): string {
  return article.name;
};

//getChildrenCategoryName accepts 1 argument: you pass ChildCategory as argument you get that ChildCategory's name  as result
export let getChildrenCategoryName = function (
  childrenCategory: ChildCategory
): string {
  return childrenCategory.name;
};

//getChildrenCategoryUrlPath accepts 1 argument: you pass ChildCategory as argument you get that ChildCategory's urlPath  as result
export let getChildrenCategoryUrlPath = function (
  childrenCategory: ChildCategory
): string {
  return childrenCategory.urlPath;
};

//getArticlePrice accepts 1 argument: you pass article as argument you get that article's price  as result

export let getArticlePrice = function (article: Article): string {
  return formatter.format(article.prices.regular.value / 100);
};

//getCategoryArticlesArray accepts 2 arguments: you pass the server response and the Index of the selected category
// as arguments you get a list of all Articles as result

export let getCategoryArticlesArray = function (
  res: AxiosResponse<any, any>,
  categoryIndex: number
): Article[] {
  return res.data.data.categories[categoryIndex].categoryArticles.articles;
};

export let getChildrenCategoryArray = function (
  res: AxiosResponse<any, any>,
  categoryIndex: number
): Article[] {
  return res.data.data.categories[categoryIndex].childrenCategories;
};
