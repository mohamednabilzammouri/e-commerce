import React, { useState } from "react";
import DisplayArticles from "./components/articles/displayArticles/DisplayArticles";
import Footer from "./components/layouts/footer/Footer";

import Header from "./components/layouts/header/Header";
import Sidebar from "./components/layouts/SideBar/Sidebar";
import { categoriesID } from "./config";
import {
  CategoriesContext,
  IdContext,
  RouteContext,
  SearchContext,
} from "./Context/Context";
import useGetCategories from "./hooks/useGetCategories";
import {
  filterArticlesBySearch,
  getChildrenArticlesFromPath,
} from "./services/ArticlesServices";

function App() {
  const [currentId, setCurrentId] = useState(categoriesID.Mobel);

  const { categories, loader, error } = useGetCategories(currentId);
  const [search, setSearch] = useState("");
  const [route, setRoute] = useState("");

  let Articles = filterArticlesBySearch(
    getChildrenArticlesFromPath(route, categories[0]),
    search
  );
  console.log(loader);

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
  const handleID = function (ID: number) {
    setCurrentId(ID);
  };

  return (
    <>
      <CategoriesContext.Provider value={categories}>
        <RouteContext.Provider value={handleRoute}>
          <SearchContext.Provider value={handleSearch}>
            <IdContext.Provider value={handleID}>
              <Header />
              <Sidebar />
              <DisplayArticles
                ArticlesLoaderAndError={{ Articles, loader, error }}
              />
              <Footer />
            </IdContext.Provider>
          </SearchContext.Provider>
        </RouteContext.Provider>
      </CategoriesContext.Provider>
    </>
  );
}

export default App;
