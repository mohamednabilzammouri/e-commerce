import { createContext } from "react";
import { Category } from "../types";
const categories: Category[] = [];
const Route: any = "/";
const handleSearch: any = "";
const handleID: any = "";
const loaderStatus: any = "";

export const CategoriesContext = createContext(categories);
export const RouteContext = createContext(Route);
export const SearchContext = createContext(handleSearch);
export const IdContext = createContext(handleID);
export const LoaderContext = createContext(loaderStatus);
