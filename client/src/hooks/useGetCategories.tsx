import { useEffect, useState } from "react";
import { getFirstNElements } from "../services/ArticlesServices";
import { Category } from "../types/types";

//useGetCategories responsability is to send a request to the server then returns an array of categories

function useGetCategories(categoryID: number) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getFirstNElements(60, categoryID)
      .then((res) => {
        setCategories(res.data.data.categories);
        setError(false);
        setLoader(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [categoryID]);
  return { categories, loader, error };
}

export default useGetCategories;
