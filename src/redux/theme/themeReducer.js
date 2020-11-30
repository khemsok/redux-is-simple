import { SET_THEME } from "./constants";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem("theme", action.payload);
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
