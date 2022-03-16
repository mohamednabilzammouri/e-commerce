import React from "react";
import DisplayArticles from "./components/articles/DisplayArticles";
import Category from "./components/categories/Category";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import "./ProductList.css";

function App() {
  return (
    <>
      <div className={"page"}>
        <Header />

        <Sidebar />

        <DisplayArticles />

        <Footer />
      </div>
    </>
  );
}

export default App;
