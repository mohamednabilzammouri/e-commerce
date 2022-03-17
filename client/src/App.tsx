import React from "react";

import Content from "./components/layouts/Content";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import { AppContext } from "./Context/Context";
import useGetCategories from "./hooks/useGetCategories";
import "./ProductList.css";

function App() {
  const [Categories] = useGetCategories();

  return (
    <>
      <div className={"page"}>
        <AppContext.Provider value={Categories}>
          <Header />
          <Sidebar />
          <Content />
          <Footer />
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
