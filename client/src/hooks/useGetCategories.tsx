import { useCallback, useEffect, useMemo, useState } from "react";
import { getFirstNElements } from "../services/ArticlesServices";
import { Category } from "../types";

function useGetCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // getFirstNElements accepts 1 argument wich is the first n elements of the categories list
    if (categories.length === 0) {
      getFirstNElements(60).then((res) => {
        setCategories(res.data.data.categories);
      });
    }
  }, []);
  return [categories];
}

export default useGetCategories;
