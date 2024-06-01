"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import CustomButton from "./CustomButton";

const Logo = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <CustomButton scrollTo="hero" additionalStyles="bg-slate-dark">
        <figure className="flex items-end gap-2">
          <Image
            src="/logo-drink-icon.png"
            width={25}
            height={25}
            alt="Drink Icon"
            className="object-contain"
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
      <figure className="flex items-end gap-2">
        <Image
          src="/logo-drink-icon.png"
          width={25}
          height={25}
          alt="Drink Icon"
          className="object-contain"
        />
        <span className="base-24 font-serif text-light-200">
          COCKTAIL<span className="text-light-100">CORNER</span>
        </span>
      </figure>
    </Link>
  );
};

export default Logo;
