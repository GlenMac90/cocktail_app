"use client";

import { Link as ScrollLink } from "react-scroll";

import { CustomButtonProps } from "@/types/drinks.index";

const CustomButton = ({
  additionalStyles,
  children,
  handleClick,
  linkTo,
}: CustomButtonProps) => {
  if (linkTo) {
    return (
      <ScrollLink
        activeClass="active"
        to={linkTo}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={`flex-center cursor-pointer bg-orange-light ${additionalStyles}`}
      >
        {children}
      </ScrollLink>
    );
  }

  return (
    <button
      className={`flex-center bg-orange-light ${additionalStyles}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
