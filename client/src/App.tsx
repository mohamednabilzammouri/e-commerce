import React, { useState } from "react";
import DisplayArticles from "./components/articles/displayArticles/DisplayArticles";

import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/header/Header";
import Sidebar from "./components/layouts/SideBar/Sidebar";
import {
  CategoriesContext,
  RouteContext,
  SearchContext,
} from "./Context/Context";
import useGetCategories from "./hooks/useGetCategories";
import {
  filterArticlesBySearch,
  getChildrenArticlesFromPath,
} from "./services/ArticlesServices";

function App() {
  const [Categories] = useGetCategories();
  const [search, setSearch] = useState("");
  const [route, setRoute] = useState("");

  let Articles = filterArticlesBySearch(
    getChildrenArticlesFromPath(route, Categories[0]),
    search
  );

  const handleRoute = function () {
    //setTimout is used because of the asynchronous behavios of javaScript sometimes handleRoute
    //gets triggered before the current route changes
    setTimeout(() => {
      setRoute(window.location.pathname);
    }, 0);
  };
  const handleSearch = function (SeachKeyword: string) {
    setSearch(SeachKeyword);
  };

  return (
    <>
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
    </>
  );
}

export default App;
