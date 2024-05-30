import { DrinkResponse, DrinkType } from "@/types/drinks.index";

export const getListOfItems = ({ data, key }: { data: any; key: string }) => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = data[`${key}${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }
  return ingredients;
};

export const formatDrinkData = (data: DrinkResponse) => {
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

export const formatDrinksData = ({ data }: { data: DrinkType }) => {
  const { idDrink, strDrink, strDrinkThumb } = data;
  return {
    id: idDrink,
    name: strDrink,
    image: strDrinkThumb,
  };
};
