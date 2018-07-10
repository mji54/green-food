import { UPDATE_INPUT } from '../constants.js';

import { bake_cookie, read_cookie } from 'sfcookies';
import { MENU } from "../menu"

// dish-type-id, user-input, selected-type, selected-dish

export default (state = '', action) => {
  let input = null;
  state = read_cookie('input');
  switch(action.type) {
    case UPDATE_INPUT:
      input = action.input;
      bake_cookie('input', input);
      return input;
    // case SELECT_DISH_TYPE:
    //   index = action.index;
    //   bake_cookie('index', index);
    //   return index;
    default:
      return state;
  }
}
