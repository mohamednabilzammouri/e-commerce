import { useEffect, useState } from "react";
import { getFirstNElements } from "../services/ArticlesServices";
import { Category } from "../types";

//useGetCategories responsability is to send a request to the server then returns an array of categories

function useGetCategories(categoryID: number) {
  const [categories, setCategories] = useState<Category[]>([]);
  console.log("useGetCategories mrigla", categoryID);

  useEffect(() => {
    if (categories.length === 0) {
      getFirstNElements(60, categoryID).then((res) => {
        setCategories(res.data.data.categories);
      });
    }
  }, []);
  return [categories];
}

export default useGetCategories;
