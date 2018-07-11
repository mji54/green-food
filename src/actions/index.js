import { SELECT_DISH_TYPE, UPDATE_INPUT, SEARCH_RESULT, RESET_INPUT } from '../constants';


export const selectDishType = index => ({
  type: SELECT_DISH_TYPE,
  index
});

export const updateInput = input => ({
  type: UPDATE_INPUT,
  input
});

export const searchResult = array => ({
  type: SEARCH_RESULT,
  array
});

export const resetInput = () => ({
  type: RESET_INPUT
});
