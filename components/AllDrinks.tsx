"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { getAllDrinks } from "@/lib/actions/drinks.actions";
import { DrinkData, DrinkDataResponse } from "@/types/drinks.index";
import useFetch from "@/hooks/useFetch";

const AllDrinks = ({ data }: { data: DrinkDataResponse }) => {
  const { drinks, isMorePosts, fetching, fetchMoreDrinks } = useFetch({
    data,
    fn: getAllDrinks,
  });
  const { ref, inView } = useInView();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inView) fetchMoreDrinks();
    }, 250);
    return () => clearTimeout(timeout);
  }, [inView]);

  return (
    <section className="flex w-full justify-center px-5 xl:px-[6.25rem]">
      <div className="page-content-max-width mt-12 flex w-full flex-col gap-[1.875rem] xl:mt-[3.75rem] xl:gap-[3.125rem]">
        <h3 className="serif-heading">All Drinks</h3>
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:gap-y-[3.125rem]">
          {drinks.map((drink: DrinkData) => (
            <Link
              href={`/drink/${drink.id}`}
              key={drink.id}
              className="flex flex-col gap-6 rounded bg-gradient-to-b from-slate-light to-slate-mid p-5"
            >
              <figure>
                <Image
                  src={drink.image}
                  height={305}
                  width={354}
                  alt="Drink Image"
                  className="w-full rounded object-contain"
                />
              </figure>
              <figcaption>
                <h4 className="semibold-24 text-light-100">{drink.name}</h4>
              </figcaption>
            </Link>
          ))}
          {isMorePosts && <div ref={ref} className="h-10 bg-red-400"></div>}
          {fetching && <p className="text-light-100">Loading more drinks...</p>}
        </div>
      </div>
    </section>
  );
};

export default AllDrinks;
