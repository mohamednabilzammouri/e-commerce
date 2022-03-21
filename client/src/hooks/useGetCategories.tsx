import { useEffect, useState } from "react";
import { getFirstNElements } from "../services/ArticlesServices";
import { Category } from "../types";

//useGetCategories responsability is to send a request to the server then returns an array of categories

function useGetCategories(categoryID: number) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    setLoader(true);
    getFirstNElements(60, categoryID).then((res) => {
      setCategories(res.data.data.categories);
      setLoader(false);
    });
  }, [categoryID]);
  return { categories, loader };
}

export default useGetCategories;
