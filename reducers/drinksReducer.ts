import { DrinkData, DrinksFilters } from "@/types/drinks.index";

interface State {
  drinks: DrinkData[];
  isMorePosts: boolean;
  skip: number;
  fetching: boolean;
  filter: DrinksFilters;
}

export const initialState: State = {
  drinks: [],
  isMorePosts: true,
  skip: 0,
  fetching: false,
  filter: "all",
};

type Action =
  | { type: "SET_FETCHING"; payload: boolean }
  | { type: "SET_FILTER"; payload: DrinksFilters }
  | {
      type: "SET_NEW_DRINKS";
      payload: { drinks: DrinkData[]; isMorePosts: boolean; skip: number };
    }
  | { type: "RESET_AND_SET_FILTER"; payload: DrinksFilters };

export const drinksReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_FETCHING":
      return { ...state, fetching: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SET_NEW_DRINKS":
      return {
        ...state,
        drinks: [...state.drinks, ...action.payload.drinks],
        isMorePosts: action.payload.isMorePosts,
        skip: action.payload.skip,
      };
    case "RESET_AND_SET_FILTER":
      return {
        ...state,
        drinks: [],
        isMorePosts: true,
        skip: 0,
        filter: action.payload,
      };
    default:
      return state;
  }
};
