import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { drinksChoices } from "@/constants";
import { DrinksFilters } from "@/types/drinks.index";
import CustomButton from "./CustomButton";

const HomePageFilters = ({
  handleTitleChange,
  filter,
}: {
  handleTitleChange: (filter: DrinksFilters) => void;
  filter: DrinksFilters;
}) => {
  const selectedChoice = drinksChoices.find(
    (choice) => choice.filter === filter
  );
  const title = selectedChoice?.title ?? drinksChoices[0].title;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="flex w-fit cursor-pointer">
        <h3 className="serif-heading">{title}</h3>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-[4.75rem] mt-2 w-64 border-0 bg-slate-mid">
        <DropdownMenuGroup>
          {drinksChoices.map((choice) => (
            <DropdownMenuItem key={choice.filter} className="m-0 p-0">
              <CustomButton
                key={choice.filter}
                additionalStyles="h-[3rem] px-3 w-full w-full flex-between bg-slate-mid hover:bg-slate-light"
                handleClick={() =>
                  handleTitleChange(choice.filter as DrinksFilters)
                }
              >
                <span className="base-20 text-light-100">{choice.title}</span>
                <Image
                  src={choice.image}
                  height={30}
                  width={30}
                  alt={choice.title}
                />
              </CustomButton>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HomePageFilters;
