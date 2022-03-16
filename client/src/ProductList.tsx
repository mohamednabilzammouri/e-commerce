import React from "react";

import { Category } from "./types";

import { getFirstNElements } from "./services/ArticlesServices";
import { ArticleCard } from "./components/articles/ArticleCard";
import Loader from "./components/utils/Loader";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

type State = {
  categories: Category[];
};

class ArticleList extends React.Component {
  state: State = {
    categories: [],
  };

  componentDidMount() {
    getFirstNElements(50).then((res) => {
      console.log(res.data);
      this.setState({ categories: res.data.categories });
    });
  }

  render() {
    var articles = this.state.categories.map((category) => {
      return category.categoryArticles.articles.map((article) => {
        return <ArticleCard article={article} />;
      });
    });

    return (
      <div className={"page"}>
        <Header />

        <div className={"sidebar"}>
          <h3>Kategorien</h3>
          {this.state.categories.length ? (
            <ul>
              {this.state.categories[0].childrenCategories.map(
                ({ name, urlPath }) => {
                  return (
                    <li>
                      <a href={`/${urlPath}`}>{name}</a>
                    </li>
                  );
                }
              )}
            </ul>
          ) : (
            <Loader />
          )}
        </div>

        <div className={"content"}>
          {this.state.categories.length ? (
            <h1>
              {this.state.categories[0].name}
              <small> ({this.state.categories[0].articleCount})</small>
            </h1>
          ) : (
            <Loader />
          )}
          <div className={"articles"}>{articles}</div>
        </div>

        <Footer />
      </div>
    );
  }
}

var PLP = () => {
  return <ArticleList />;
};

export default PLP;
