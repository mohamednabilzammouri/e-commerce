import { createContext } from "react";
import { Category } from "../types/types";
const categories: Category[] = [];
const Route: any = "/";
const handleSearch: any = "";
const handleID: any = "";

//CategoriesContext will be responsible of delivering the category data to other components
export const CategoriesContext = createContext(categories);

//RouteContext will be responsible of delivering the current route to other components
export const RouteContext = createContext(Route);

//SearchContext will be responsible of delivering the current value of the search input to other components
export const SearchContext = createContext(handleSearch);

//IdContext will be responsible of delivering the id of the categories data to other components
export const IdContext = createContext(handleID);
