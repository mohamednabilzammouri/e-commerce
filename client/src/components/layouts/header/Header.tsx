import React, { useContext } from "react";
import { SearchContext } from "../../../Context/Context";
import { Logo, Container, SearchInput } from "./HeaderStyle";
import { memo } from "react";
import DisplayCategories from "../../categories/category/DisplayCategories";

function Header(): JSX.Element {
  console.log("headerr rerendered");
  const setSearch = useContext(SearchContext);

  const handleSearch = function (
    searchKeyWord: React.ChangeEvent<HTMLInputElement>
  ) {
    setSearch(searchKeyWord.target.value);
  };

  return (
    <>
      <Container>
        <Logo
          src="https://www.home24.de/corgi/static/media/home-24-logo.4f73bd13.svg"
          alt=""
          width={"20%"}
        />
        <SearchInput placeholder={"Search..."} onChange={handleSearch} />
        <DisplayCategories />
      </Container>
    </>
  );
}

export default memo(Header);
