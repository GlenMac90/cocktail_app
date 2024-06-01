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
  | { type: "SET_DRINKS"; payload: DrinkData[] }
  | { type: "ADD_DRINKS"; payload: DrinkData[] }
  | { type: "SET_IS_MORE_POSTS"; payload: boolean }
  | { type: "SET_SKIP"; payload: number }
  | { type: "SET_FETCHING"; payload: boolean }
  | { type: "SET_FILTER"; payload: DrinksFilters }
  | { type: "RESET" }
  | {
      type: "SET_NEW_DRINKS";
      payload: { drinks: DrinkData[]; isMorePosts: boolean; skip: number };
    }
  | { type: "RESET_AND_SET_FILTER"; payload: DrinksFilters };

export const drinksReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_DRINKS":
      return { ...state, drinks: action.payload };
    case "ADD_DRINKS":
      return { ...state, drinks: [...state.drinks, ...action.payload] };
    case "SET_IS_MORE_POSTS":
      return { ...state, isMorePosts: action.payload };
    case "SET_SKIP":
      return { ...state, skip: action.payload };
    case "SET_FETCHING":
      return { ...state, fetching: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "RESET":
      return {
        ...state,
        drinks: [],
        isMorePosts: true,
        skip: 0,
        filter: "all",
      };
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
