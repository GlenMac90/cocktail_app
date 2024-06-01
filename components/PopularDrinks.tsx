"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { DrinkData } from "@/types/drinks.index";
import DrinkCard from "./DrinkCard";

const PopularDrinks = ({ drinks }: { drinks: DrinkData[] }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className="homepage-content-max-width flex w-full flex-col gap-[1.875rem] xl:gap-[3.125rem]"
    >
      <h2 className="serif-heading text-light-100">Popular Drinks</h2>

      <Carousel className="relative flex">
        <CarouselContent>
          {drinks.map((drink: DrinkData) => (
            <CarouselItem
              key={drink.apiId}
              className="flex w-full sm:basis-1/2 xl:basis-1/3"
            >
              <DrinkCard drink={drink} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-3 z-10" />
        <CarouselNext className="absolute right-3 z-10" />
        <div className="absolute right-0 h-full w-4 bg-gradient-to-r from-transparent to-slate-dark" />
        <div className="absolute left-0 h-full w-4 bg-gradient-to-l from-transparent to-slate-dark" />
      </Carousel>
    </motion.section>
  );
};

export default PopularDrinks;
