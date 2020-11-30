import { FETCH_QUOTE_REQUEST, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAIL } from "./constants";

const initialState = {
  quote: "",
  author: "",
  isLoading: false,
  error: "",
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_REQUEST:
      return { ...state, isLoading: true, error: "" };

    case FETCH_QUOTE_SUCCESS:
      const quote = action.payload[0]["q"];
      const author = action.payload[0]["a"];

      return { ...state, isLoading: false, quote: quote, author: author };

    case FETCH_QUOTE_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
