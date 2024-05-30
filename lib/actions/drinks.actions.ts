"use server";

import {
  FullDrinkResponseType,
  FullDrinkData,
  DrinkData,
} from "@/types/drinks.index";
import { formatFullDrinkData, formatDrinksData } from "@/utils";

export async function getAllDrinks(): Promise<DrinkData[]> {
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
    return formattedData;
  } catch (error) {
    throw new Error();
  }
}

export async function getDrinkByName(name: string): Promise<FullDrinkData> {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}search.php?s=${name}`
    );
    const responseJson = await response.json();
    const formattedData = formatFullDrinkData(responseJson);
    return formattedData;
  } catch (error) {
    throw new Error();
  }
}

export async function getDrinkById(id: number): Promise<FullDrinkData> {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}lookup.php?i=${id}`
    );
    const responseJson = await response.json();
    const formattedData = formatFullDrinkData(responseJson);
    return formattedData;
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

export async function getDrinksByAlcoholicStatus(
  alcoholic: boolean
): Promise<DrinkData[]> {
  const alcoholicStatus = alcoholic ? "Alcoholic" : "Non_Alcoholic";
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}filter.php?a=${alcoholicStatus}`
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
