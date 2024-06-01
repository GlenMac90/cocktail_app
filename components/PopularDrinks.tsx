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
    <section className="homepage-content-max-width flex w-full flex-col gap-[1.875rem] xl:gap-[3.125rem]">
      <h2 className="serif-heading text-light-100">Popular Drinks</h2>
      <Carousel className="relative flex">
        <CarouselContent>
          {drinks.map((drink: DrinkData) => (
            <CarouselItem
              key={drink.id}
              className="flex w-fit max-w-sm sm:basis-1/2 xl:basis-1/3"
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
    </section>
  );
};

export default PopularDrinks;
