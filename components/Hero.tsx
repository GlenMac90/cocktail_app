"use client";

import Image from "next/image";

const Hero = () => {
  const handleArrowClick = () => {
    console.log("Arrow clicked");
  };

  return (
    <header className="flex w-full justify-center overflow-hidden bg-[url('/hero-background.png')] bg-cover">
      <div className="flex w-full max-w-3xl flex-col items-center px-5 sm:px-10 xl:max-w-[90rem] xl:flex-row xl:pl-[6.25rem]">
        <div className="mb-10 flex w-full max-w-lg flex-col xl:max-w-2xl xl:shrink-0">
          <p className="base-20 self-center text-light-100 xl:self-start">
            Beverages for connoisseurs
          </p>
          <h1 className="hero-heading">
            Raise Your Glass Begin a{" "}
            <span className="text-orange-light">Flavorful Cocktail</span>{" "}
            Journey
          </h1>
          <button
            className="flex-center mt-10 h-12 gap-2.5 bg-orange-light sm:h-16 xl:w-[17.375rem]"
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
        <figure className="flex h-fit w-full max-w-lg shrink-0 items-end xl:mt-20 xl:max-w-xl xl:pl-14">
          <Image
            src="/drinks-graphic.png"
            alt="A refreshing orange cocktail in a glass"
            height={618}
            width={600}
            className="object-contain"
          />
        </figure>
      </div>
    </header>
  );
};

export default Hero;
