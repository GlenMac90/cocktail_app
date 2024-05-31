import { DrinkDataResponse, DrinkData } from "@/types/drinks.index";
import { useState } from "react";

const useFetch = ({
  data,
  fn,
}: {
  data: DrinkDataResponse;
  fn: (skip: number) => Promise<DrinkDataResponse>;
}) => {
  const [drinks, setDrinks] = useState<DrinkData[]>(data.drinks);
  const [isMorePosts, setIsMorePosts] = useState<boolean>(data.isMorePosts);
  const [skip, setSkip] = useState<number>(data.skip);
  const [fetching, setFetching] = useState<boolean>(false);

  const fetchMoreDrinks = async () => {
    if (!isMorePosts) return;
    try {
      setFetching(true);

      await new Promise((resolve) => setTimeout(resolve, 500));

      const newDrinks = await fn(skip);
      setDrinks((prevDrinks) => [...prevDrinks, ...newDrinks.drinks]);
      setIsMorePosts(newDrinks.isMorePosts);
      setSkip(newDrinks.skip);
    } catch (error) {
      console.error("Error fetching more drinks", error);
    } finally {
      setFetching(false);
    }
  };

  return { drinks, isMorePosts, fetching, fetchMoreDrinks };
};

export default useFetch;
