"use server";

import { DrinkResponse } from "@/types/drinks.index";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";

const getListOfItems = ({ data, key }: { data: any; key: string }) => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = data[`${key}${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }
  return ingredients;
};

const formatDrinkData = (data: DrinkResponse) => {
  const drinkData = data.drinks[0];
  const ingredients = getListOfItems({ data: drinkData, key: "strIngredient" });
  const measures = getListOfItems({ data: drinkData, key: "strMeasure" });
  return {
    name: drinkData.strDrink,
    image: drinkData.strImageSource,
    instructions: drinkData.strInstructions,
    glassType: drinkData.strGlass,
    category: drinkData.strCategory,
    ingredients,
    measures,
  };
};

export async function getDrinkByName(name: string) {
  try {
    const response = await fetch(`${baseURL}search.php?s=${name}`);
    const responseJson = await response.json();
    const formattedData = formatDrinkData(responseJson);
    return formattedData;
  } catch (error) {
    throw new Error();
  }
}

export async function getDrinkById(id: number) {
  try {
    const response = await fetch(`${baseURL}lookup.php?i=${id}`);
    const responseJson = await response.json();
    const formattedData = formatDrinkData(responseJson);
    return formattedData;
  } catch (error) {
    throw new Error();
  }
}
