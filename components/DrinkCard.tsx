"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { DrinkData } from "@/types/drinks.index";

const DrinkCard = ({ drink, delay }: { drink: DrinkData; delay?: number }) => {
  if (delay) {
    return (
      <motion.figure
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.8, delay },
          y: { duration: 0.8, delay },
          scale: { duration: 0.2, delay: 0 },
        }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        className="rounded bg-gradient-to-b from-slate-light to-slate-mid p-5"
      >
        <Link
          href={`/drink/${drink.name}`}
          key={drink.id}
          className="flex flex-col gap-6"
        >
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
        </Link>
      </motion.figure>
    );
  }
  return (
    <Link
      href={`/drink/${drink.name}`}
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
