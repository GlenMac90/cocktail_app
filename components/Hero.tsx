"use client";

import Image from "next/image";

const Hero = () => {
  const handleArrowClick = () => {
    console.log("Arrow clicked");
  };

  return (
    <header className="flex w-full justify-center overflow-hidden bg-[url('/hero-background.png')] bg-cover px-[6.25rem]">
      <div className="page-content-max-width flex w-full flex-col items-center xl:flex-row ">
        <div className="mb-10 flex w-full flex-col xl:max-w-3xl xl:shrink-0">
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
        <figure className="flex h-fit w-full max-w-xl shrink-0 items-end xl:mt-20">
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