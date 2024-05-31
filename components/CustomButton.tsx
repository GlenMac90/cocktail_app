"use client";

import { CustomButtonProps } from "@/types/drinks.index";

const CustomButton = ({
  additionalStyles,
  children,
  handleClick,
}: CustomButtonProps) => {
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
