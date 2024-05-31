import Image from "next/image";

import AccordionTemplate from "@/components/AccordionTemplate";
import Tag from "@/components/Tag";
import { getDrinkById } from "@/lib/actions/drinks.actions";
import { AccordionDataType } from "@/types/drinks.index";

const Drink = async ({ params }: { params: { id: string } }) => {
  const drink = await getDrinkById(+params.id);

  const { name, image, ingredients, instructions, glassType, category } = drink;

  const accordionData: AccordionDataType[] = [
    { title: "INGREDIENTS", data: ingredients },
    { title: "INSTRUCTIONS", data: [instructions] },
    { title: "GLASS", data: [glassType] },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center px-5 pb-[6.25rem] pt-12 xl:px-[6.25rem]">
      <section className="drinkpage-content-max-width flex w-full flex-col gap-[1.875rem] xl:flex-row xl:gap-0">
        <div className="flex flex-col xl:hidden">
          {glassType && category && (
            <div className="flex gap-4">
              {glassType && <Tag title={glassType} />}
              {category && <Tag title={category} />}
            </div>
          )}
          <h3 className="semibold-40 mt-5 text-light-100">{name}</h3>
        </div>

        <figure className="w-full xl:max-w-xl">
          <Image
            src={image ?? "/image-not-found.png"}
            height={600}
            width={600}
            alt={`Image of ${drink.name}`}
          />
        </figure>
        <aside className="flex w-full flex-col xl:pl-[3.75rem] xl:pt-5">
          <div className="hidden xl:flex xl:flex-col">
            {glassType && category && (
              <div className="flex gap-4">
                {glassType && <Tag title={glassType} />}
                {category && <Tag title={category} />}
              </div>
            )}
            <h3 className="semibold-40 mt-5 text-light-100">{name}</h3>
          </div>
          <AccordionTemplate data={accordionData} />
        </aside>
      </section>
      <section className="page-content-max-width flex w-full flex-col">
        section two
      </section>
    </main>
  );
};

export default Drink;
