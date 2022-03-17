import React, { useState } from "react";
import DisplayArticles from "./components/articles/DisplayArticles";

import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import {
  CategoriesContext,
  RouteContext,
  SearchContext,
} from "./Context/Context";
import useGetCategories from "./hooks/useGetCategories";
import "./ProductList.css";
import {
  filterArticlesBySearch,
  getChildrenArticlesFromPath,
} from "./services/ArticlesServices";

function App() {
  const [Categories] = useGetCategories();
  const [search, setSearch] = useState("");
  const [route, setRoute] = useState("");

  const Articles = filterArticlesBySearch(
    getChildrenArticlesFromPath(route, Categories[0]),
    search
  );
  const handleRoute = function () {
    setRoute(window.location.pathname);
  };
  const handleSearch = function (SeachKeyword: string) {
    setSearch(SeachKeyword);
  };

  return (
    <>
      <div className={"page"}>
        <CategoriesContext.Provider value={Categories}>
          <RouteContext.Provider value={handleRoute}>
            <SearchContext.Provider value={handleSearch}>
              <Header />
              <Sidebar />
              <DisplayArticles Articles={Articles} />
              <Footer />
            </SearchContext.Provider>
          </RouteContext.Provider>
        </CategoriesContext.Provider>
      </div>
    </>
  );
}

export default App;
