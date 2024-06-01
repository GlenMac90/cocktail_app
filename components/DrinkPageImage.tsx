"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FullDrinkData } from "@/types/drinks.index";

const DrinkPageImage = ({ data }: { data: FullDrinkData }) => {
  return (
    <motion.figure
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Image
        src={data.image ?? "/image-not-found.png"}
        height={800}
        width={800}
        priority
        alt={`Image of ${data.name}`}
      />
    </motion.figure>
  );
};

export default DrinkPageImage;
