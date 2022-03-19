import axios, { AxiosResponse } from "axios";
import { Article, Category } from "../types";

// categoriesQuery accepts 1 argument wich is the first n elements of the categories list
let categoriesQuery = (FisrtNelements: number, ID: number): string => {
  return `{
  categories(ids: "${ID}", locale: de_DE) {
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
  categoryArticles(first: ${FisrtNelements}) {
    articles {
      name
      variantName
      prices {
        currency
        regular {
          value
        }
      }
      images(format: WEBP, maxWidth: 800, maxHeight: 800, limit: 8) {
        path
      }
    }
  }
}`;
};

// getFirstNElements accepts 1 argument wich is the first n elements of the categories list
export let getFirstNElements = function (
  FisrtNelements: number,
  ID: number
): Promise<AxiosResponse<any, any>> {
  return axios.post(
    "/graphql",
    JSON.stringify({
      query: categoriesQuery(FisrtNelements, ID),
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

//getChildrenArticlesFromPath returns a list of child category articles from their path
export const getChildrenArticlesFromPath = function (
  currentPath: string,
  currentCategory: Category
): Article[] | undefined {
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
//filterArticlesBySearch filters Articles based on the searchbar input value
export const filterArticlesBySearch = function (
  Articles: Article[] | undefined,
  searchKeyWord: String
): Article[] | undefined {
  return Articles?.filter((article) =>
    article.name.toLowerCase().includes(searchKeyWord.toLowerCase())
  );
};
