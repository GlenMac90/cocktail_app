"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import CustomButton from "./CustomButton";

const Logo = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <CustomButton linkTo="hero" additionalStyles="bg-slate-dark">
        <figure className="flex items-center">
          <Image
            src="/logo-drink-icon.png"
            width={43}
            height={32}
            alt="Drink Icon"
          />
          <span className="base-24 font-serif text-light-200">
            COCKTAIL<span className="text-light-100">CORNER</span>
          </span>
        </figure>
      </CustomButton>
    );
  }

  return (
    <Link href="/">
      <figure className="flex items-center">
        <Image
          src="/logo-drink-icon.png"
          width={43}
          height={32}
          alt="Drink Icon"
        />
        <span className="base-24 font-serif text-light-200">
          COCKTAIL<span className="text-light-100">CORNER</span>
        </span>
      </figure>
    </Link>
  );
};

export default Logo;
