"use server";

import { DrinkType } from "@/types/drinks.index";
import { formatDrinkData } from "@/utils";

const formatDrinksData = ({ data }: { data: DrinkType }) => {
  const { idDrink, strDrink, strDrinkThumb } = data;
  return {
    id: idDrink,
    name: strDrink,
    image: strDrinkThumb,
  };
};

export async function getAllDrinks() {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}filter.php?c=Ordinary_Drink`
    );
    const responseJson = await response.json();
    const formattedData = responseJson.drinks.map((data: DrinkType) => {
      return formatDrinksData({ data });
    });
    return formattedData;
  } catch (error) {
    throw new Error();
  }
}

export async function getDrinkByName(name: string) {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}search.php?s=${name}`
    );
    const responseJson = await response.json();
    const formattedData = formatDrinkData(responseJson);
    return formattedData;
  } catch (error) {
    throw new Error();
  }
}

export async function getDrinkById(id: number) {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}lookup.php?i=${id}`
    );
    const responseJson = await response.json();
    const formattedData = formatDrinkData(responseJson);
    return formattedData;
  } catch (error) {
    throw new Error();
  }
}
