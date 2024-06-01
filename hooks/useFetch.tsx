import { useState } from "react";
import {
  DrinkDataResponse,
  DrinkData,
  DrinksFilters,
} from "@/types/drinks.index";

const useFetch = ({
  data,
  fn,
}: {
  data: DrinkDataResponse;
  fn: ({
    skip,
    filter,
  }: {
    skip?: number;
    filter: DrinksFilters;
  }) => Promise<DrinkDataResponse>;
}) => {
  const [drinks, setDrinks] = useState<DrinkData[]>(data.drinks);
  const [isMorePosts, setIsMorePosts] = useState<boolean>(data.isMorePosts);
  const [skip, setSkip] = useState<number>(data.skip);
  const [fetching, setFetching] = useState<boolean>(false);
  const [filter, setFilter] = useState<DrinksFilters>("all");

  const fetchMoreDrinks = async () => {
    if (!isMorePosts || fetching) return;

    try {
      setFetching(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newDrinks = await fn({ skip, filter });
      setDrinks((prevDrinks) => [...prevDrinks, ...newDrinks.drinks]);
      setIsMorePosts(newDrinks.isMorePosts);
      setSkip((prevSkip) => prevSkip + newDrinks.drinks.length);
    } catch (error) {
      console.error("Error fetching more drinks", error);
    } finally {
      setFetching(false);
    }
  };

  const updateStateAndFetch = async () => {
    setSkip(0);
    setDrinks([]);
    setIsMorePosts(true);
    await fetchMoreDrinks();
  };

  return {
    drinks,
    isMorePosts,
    fetching,
    filter,
    fetchMoreDrinks,
    setFilter,
    updateStateAndFetch,
  };
};

export default useFetch;
