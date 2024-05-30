import {
  DrinkData,
  DrinkKeys,
  DrinkResponse,
  FullDrinkData,
  FullDrinkResponseType,
} from "@/types/drinks.index";

export const getListOfItems = ({
  data,
  key,
}: {
  data: FullDrinkResponseType;
  key: "strIngredient" | "strMeasure";
}): string[] => {
  const ingredients: string[] = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = data[`${key}${i}` as DrinkKeys];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }
  return ingredients;
};

export const formatFullDrinkData = (data: DrinkResponse): FullDrinkData => {
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

export const formatDrinksData = ({
  data,
}: {
  data: FullDrinkResponseType;
}): DrinkData => {
  const { idDrink, strDrink, strDrinkThumb } = data;
  return {
    id: idDrink,
    name: strDrink,
    image: strDrinkThumb,
  };
};
