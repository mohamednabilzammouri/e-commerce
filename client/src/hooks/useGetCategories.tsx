import { useEffect, useState } from "react";
import {
  getArticlesFromPath,
  getFirstNElements,
} from "../services/ArticlesServices";
import { Category } from "../types";

function useGetCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // getFirstNElements accepts 1 argument wich is the first n elements of the categories list

    getFirstNElements(60).then((res) => {
      setCategories(res.data.data.categories);
    });
  }, []);
  return [categories];
}

export default useGetCategories;
