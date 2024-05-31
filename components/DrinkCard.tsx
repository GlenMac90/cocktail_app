import Link from "next/link";
import Image from "next/image";

import { DrinkData } from "@/types/drinks.index";

const DrinkCard = ({ drink }: { drink: DrinkData }) => {
  return (
    <Link
      href={`/drink/${drink.id}`}
      key={drink.id}
      className="rounded bg-gradient-to-b from-slate-light to-slate-mid p-5"
    >
      <figure className="flex flex-col gap-6">
        <Image
          src={drink.image}
          height={305}
          width={354}
          alt="Drink Image"
          className="w-full rounded object-contain"
        />
        <figcaption>
          <h4 className="semibold-24 text-light-100">{drink.name}</h4>
        </figcaption>
      </figure>
    </Link>
  );
};

export default DrinkCard;
