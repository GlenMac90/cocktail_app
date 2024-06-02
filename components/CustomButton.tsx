"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import { CustomButtonProps } from "@/types/drinks.index";

const CustomButton = ({
  additionalStyles,
  children,
  handleClick,
  scrollTo,
  link,
}: CustomButtonProps) => {
  if (scrollTo) {
    return (
      <ScrollLink
        activeClass="active"
        to={scrollTo}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={`flex-center custom-button ${additionalStyles}`}
      >
        {children}
      </ScrollLink>
    );
  }

  if (link) {
    return (
      <Link
        href={link}
        className={`flex-center custom-button ${additionalStyles}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`custom-button ${additionalStyles}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
