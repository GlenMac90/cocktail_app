"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { getAllDrinks } from "@/lib/actions/drinks.actions";
import LoadingGraphic from "./LoadingGraphic";
import { DrinkData, DrinkDataResponse } from "@/types/drinks.index";
import useFetch from "@/hooks/useFetch";
import NoMoreDrinks from "./NoMoreDrinks";
import DrinkCard from "./DrinkCard";
import CustomButton from "./CustomButton";

const AllDrinks = ({ data }: { data: DrinkDataResponse }) => {
  const { drinks, isMorePosts, fetching, fetchMoreDrinks } = useFetch({
    data,
    fn: getAllDrinks,
  });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && isMorePosts) fetchMoreDrinks();
  }, [inView]);

  const loadMore = () => {
    if (isMorePosts) fetchMoreDrinks();
  };

  return (
    <section className="flex w-full justify-center px-5 xl:px-[6.25rem]">
      <div
        id="all-drinks"
        className="homepage-content-max-width mt-12 flex w-full flex-col gap-[1.875rem] xl:mt-[3.75rem] xl:gap-[3.125rem]"
      >
        <h3 className="serif-heading">All Drinks</h3>
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 xl:grid-cols-3 xl:gap-y-[3.125rem]">
          {drinks.map((drink: DrinkData) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>

        {!fetching && isMorePosts && (
          <CustomButton
            additionalStyles={"w-full h-10 xs:hidden"}
            handleClick={loadMore}
          >
            <span className="medium-20">See More</span>
          </CustomButton>
        )}

        <div className="flex-center min-h-40 w-full">
          {fetching && <LoadingGraphic />}
          {!isMorePosts && <NoMoreDrinks />}
          <div ref={ref} className="hidden h-10 xs:flex" />
        </div>
      </div>
    </section>
  );
};

export default AllDrinks;
