import axios, { AxiosResponse } from "axios";
import { Article, Category } from "../types";

// categoriesQuery accepts 1 argument wich is the first n elements of the categories list
let categoriesQuery = (n: number): string => {
  return `{
  categories(ids: "156126", locale: de_DE) {
    name
    articleCount
    childrenCategories {
      name
      urlPath
      articleCount
      ...categoryArticles
    }
    ...categoryArticles
  }
}

fragment categoryArticles on Category {
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
      images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
        path
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

export const getChildrenArticlesFromPath = function (
  currentPath: string,
  currentCategory: Category
): Article[] | undefined {
  console.log("/aaa" + currentCategory?.childrenCategories);
  if (
    currentCategory?.childrenCategories.find(
      (childrenCategory) => "/" + childrenCategory.urlPath === currentPath
    ) === undefined
  )
    return currentCategory?.categoryArticles.articles;

  return currentCategory.childrenCategories.find(
    (childrenCategory) => "/" + childrenCategory.urlPath === currentPath
  )?.categoryArticles.articles;
};

export const filterArticlesBySearch = function (
  Articles: Article[] | undefined,
  searchKeyWord: String
): Article[] | undefined {
  return Articles?.filter((article) =>
    article.name.toLowerCase().includes(searchKeyWord.toLowerCase())
  );
};

// const getChildCategoryDataFromUrl = (category: Category, route: string) => {
//   return route === ""
//     ? category.categoryArticles.articles
//     : category.childrenCategories.find(({ urlPath }) => urlPath === route)
//         ?.categoryArticles.articles;
// };
