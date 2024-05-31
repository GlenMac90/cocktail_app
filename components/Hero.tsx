"use client";

import Image from "next/image";

const Hero = () => {
  const handleArrowClick = () => {
    console.log("Arrow clicked");
  };

  return (
    <header className="flex w-full justify-center bg-[url('/hero-background.png')] bg-cover">
      <div className="flex w-full max-w-3xl flex-col items-center px-10 xl:max-w-[90rem] xl:flex-row xl:pl-[6.25rem]">
        <div className="mb-10 flex w-full max-w-2xl flex-col xl:mb-64 xl:mt-[7.5rem] xl:shrink-0">
          <p className="base-20 text-light-100">Beverages for connoisseurs</p>
          <h1 className="hero-heading mt-5 text-light-100">
            Raise Your Glass Begin a{" "}
            <span className="text-orange-light">Flavorful Cocktail</span>{" "}
            Journey
          </h1>
          <button
            className="flex-center mt-10 h-16 w-[17.375rem] gap-2.5 bg-orange-light"
            onClick={handleArrowClick}
          >
            <span className="medium-20">Check Collections</span>
            <Image
              src="/icons/arrow-down.svg"
              height={14}
              width={14}
              alt="Arrow pointing down"
            />
          </button>
        </div>
        <figure className="relative h-[44rem] w-full max-w-lg shrink-0 xl:max-w-2xl xl:pl-10">
          <Image
            src="/drinks-graphic.png"
            alt="A refreshing orange cocktail in a glass"
            height={618}
            width={600}
            className="absolute object-contain xl:-bottom-8"
          />
        </figure>
      </div>
    </header>
  );
};

export default Hero;
