"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { getAllDrinks } from "@/lib/actions/drinks.actions";
import LoadingGraphic from "./LoadingGraphic";
import { DrinkData, DrinkDataResponse } from "@/types/drinks.index";
import useFetch from "@/hooks/useFetch";
import NoMoreDrinks from "./NoMoreDrinks";
import DrinkCard from "./DrinkCard";

const AllDrinks = ({ data }: { data: DrinkDataResponse }) => {
  const { drinks, isMorePosts, fetching, fetchMoreDrinks } = useFetch({
    data,
    fn: getAllDrinks,
  });
  const { ref, inView } = useInView();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inView && isMorePosts) fetchMoreDrinks();
    }, 100);
    return () => clearTimeout(timeout);
  }, [inView]);

  return (
    <section className="flex w-full justify-center px-5 xl:px-[6.25rem]">
      <div className="page-content-max-width mt-12 flex w-full flex-col gap-[1.875rem] xl:mt-[3.75rem] xl:gap-[3.125rem]">
        <h3 className="serif-heading">All Drinks</h3>
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 xl:grid-cols-3 xl:gap-y-[3.125rem]">
          {drinks.map((drink: DrinkData) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
        <div ref={ref} className="flex-center min-h-60 w-full">
          {fetching && <LoadingGraphic />}
          {!isMorePosts && <NoMoreDrinks />}
        </div>
      </div>
    </section>
  );
};

export default AllDrinks;
