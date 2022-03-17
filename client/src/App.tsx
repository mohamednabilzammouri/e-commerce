import React from "react";
import DisplayArticles from "./components/articles/DisplayArticles";
import Category from "./components/categories/Category";
import Content from "./components/layouts/Content";
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
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
