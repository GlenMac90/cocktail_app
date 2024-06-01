"use server";

import {
  FullDrinkResponseType,
  FullDrinkData,
  DrinkData,
  DrinkDataResponse,
  DrinksFilters,
} from "@/types/drinks.index";
import { formatFullDrinkData, formatDrinksData } from "@/utils";
import { drinksChoices } from "@/constants";

export async function getFilteredDrinks({
  skip = 0,
  filter,
}: {
  skip?: number;
  filter: DrinksFilters;
}): Promise<DrinkDataResponse> {
  const drink = drinksChoices.find((choice) => choice.filter === filter);
  const suffix = drink?.suffix ?? drinksChoices[0].suffix;

  try {
    const response = await fetch(`${process.env.API_BASE_URL}${suffix}`);
    const responseJson = await response.json();
    const formattedData = responseJson.drinks.map(
      (data: FullDrinkResponseType) => {
        return formatDrinksData({ data });
      }
    );

    const isMorePosts = formattedData.length > skip + 9;

    return {
      drinks: formattedData.slice(skip, skip + 9),
      isMorePosts,
      skip: skip + 9,
    };
  } catch (error) {
    throw new Error();
  }
}

export async function getAllDrinks(
  skip: number = 0
): Promise<DrinkDataResponse> {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}filter.php?c=Ordinary_Drink`
    );
    const responseJson = await response.json();
    const formattedData = responseJson.drinks.map(
      (data: FullDrinkResponseType) => {
        return formatDrinksData({ data });
      }
    );

    const isMorePosts = formattedData.length > skip + 9;

    return {
      drinks: formattedData.slice(skip, skip + 9),
      isMorePosts,
      skip: skip + 9,
    };
  } catch (error) {
    throw new Error();
  }
}

export type GetDrinkByNameType = {
  drinkData: FullDrinkData;
  similarDrinks: DrinkData[];
};

export async function getDrinkByName(
  name: string
): Promise<GetDrinkByNameType> {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}search.php?s=${name}`
    );
    const responseJson = await response.json();
    const formattedData = formatFullDrinkData({ data: responseJson });

    const nameWithSpaces = name.replace(/%20/g, " ");

    const popularDrinks = await fetch(`${process.env.API_BASE_URL}popular.php`);
    const similarDrinksJson = await popularDrinks.json();

    const formattedSimilarDrinks = similarDrinksJson.drinks
      .reduce((acc: DrinkData[], data: FullDrinkResponseType) => {
        if (data.strDrink !== nameWithSpaces) {
          acc.push(formatDrinksData({ data }));
        }
        return acc;
      }, [])
      .slice(0, 10);

    return {
      drinkData: formattedData,
      similarDrinks: formattedSimilarDrinks,
    };
  } catch (error) {
    throw new Error();
  }
}

export async function getDrinksByIngredient(
  ingredient: string
): Promise<DrinkData[]> {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}filter.php?i=${ingredient}`
    );
    const responseJson = await response.json();
    const formattedData = responseJson.drinks.map(
      (data: FullDrinkResponseType) => {
        return formatDrinksData({ data });
      }
    );
    return formattedData;
  } catch (error) {
    throw new Error();
  }
}
