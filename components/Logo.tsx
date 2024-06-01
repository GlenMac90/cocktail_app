"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

const Logo = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <ScrollLink
        activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="cursor-pointer"
      >
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
      </ScrollLink>
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
