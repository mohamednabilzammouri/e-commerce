import React, { useContext } from "react";
import { SearchContext } from "../../../Context/Context";
import Category from "../../categories/Category";
import { Logo, Container, SearchInput } from "./HeaderStyle";

function Header() {
  console.log("header rerendered");
  const setSearch = useContext(SearchContext);

  const handleSearch = function (searchKeyWord: any) {
    setSearch(searchKeyWord.target.value);
  };

  return (
    <Container>
      <Logo
        src="https://www.home24.de/corgi/static/media/home-24-logo.4f73bd13.svg"
        alt=""
        width={"20%"}
      />
      <SearchInput placeholder={"Search..."} onChange={handleSearch} />

      <Category />
    </Container>
  );
}

export default Header;
