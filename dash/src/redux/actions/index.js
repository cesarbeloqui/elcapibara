import { ALGO, TOGGLE_COLOR_MODE, SIDEBAR_PROVIDER, WINDOW_SIZE, IS_COLLAPSED  } from "./types.js";
import axios from "axios";

export const getMenu = () => {
  return async (dispatch) => {
    const apiUrl = "https://algo.com";
    const queryParams = {
      params: {
        deleted: false,
      },
    };

    try {
      const response = await axios(apiUrl, queryParams);
      const menu = response.data;

      return dispatch({ type: ALGO, payload: menu });
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };
};

export const toggleColorMode = () => ({ type: TOGGLE_COLOR_MODE });
export const sizeWindows = () => {
  return (dispatch) => { 
    const width = window.innerWidth;
    const height = window.innerHeight;
    const payload = { width, height };
    return dispatch({ type: WINDOW_SIZE, payload }); 
   
   }
};




export const changeIsCollapsed = () => {
  return { type: IS_COLLAPSED };
}