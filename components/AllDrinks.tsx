import { DrinkData } from "@/types/drinks.index";
import React from "react";

const AllDrinks = ({ drinks }: { drinks: DrinkData[] }) => {
  return (
    <section className="flex w-full justify-center px-5 xl:px-[6.25rem]">
      <div className="page-content-max-width mt-12 flex w-full flex-col gap-[1.875rem] xl:mt-[3.75rem] xl:gap-[3.125rem]">
        <h3 className="serif-heading">All Drinks</h3>
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:gap-y-[3.125rem]">
          {drinks.map((drink: DrinkData) => (
            <p key={drink.id}>{drink.name}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllDrinks;
