import { createContext } from "react";
import { Category } from "../types";
const categories: Category[] = [];
const Route: any = "/";
const handleSearch: any = "";
export const CategoriesContext = createContext(categories);
export const RouteContext = createContext(Route);
export const SearchContext = createContext(handleSearch);
