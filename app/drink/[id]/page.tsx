import { getDrinkById } from "@/lib/actions/drinks.actions";
import Image from "next/image";

const Drink = async ({ params }: { params: { id: string } }) => {
  const drink = await getDrinkById(+params.id);

  const { name, image, ingredients, instructions, glassType, category } = drink;

  return (
    <main className="flex min-h-screen flex-col items-center px-5 pb-[6.25rem] pt-12 xl:px-[6.25rem]">
      <section className="page-content-max-width flex w-full flex-col gap-[1.875rem] xl:flex-row xl:gap-[3.75rem]">
        <figure className="w-full max-w-[33.125rem]">
          <Image
            src={image ?? "/image-not-found.png"}
            height={530}
            width={530}
            alt={`Image of ${drink.name}`}
          />
        </figure>
        <aside className="flex w-full flex-col pt-5">
          {glassType && category && (
            <div className="flex gap-4">
              {glassType && (
                <div className="rounded-sm bg-slate-light px-[1.0625rem] py-2.5">
                  <span className="base-12 text-light-100">{glassType}</span>
                </div>
              )}
              {category && (
                <div className="rounded-sm bg-slate-light px-[1.0625rem] py-2.5">
                  <span className="base-12 text-light-100">{category}</span>
                </div>
              )}
            </div>
          )}
          <h3 className="semibold-40 mt-5 text-light-100">{name}</h3>
          {ingredients && (
            <div className="mt-10">
              <h4 className="orange-heading">INGREDIENTS</h4>
            </div>
          )}
          {instructions && (
            <div className="mt-[3.125rem] flex w-full flex-col gap-5 xl:mt-[3.75rem] xl:gap-[1.875rem]">
              <h4 className="orange-heading">INSTRUCTIONS</h4>
              <p className="medium-18 text-light-100">{instructions}</p>
            </div>
          )}
        </aside>
      </section>
      <section className="page-content-max-width flex w-full flex-col">
        section two
      </section>
    </main>
  );
};

export default Drink;
