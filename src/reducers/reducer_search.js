import { UPDATE_INPUT, RESET_INPUT } from '../constants.js';

import { bake_cookie, read_cookie } from 'sfcookies';

export default (state = '', action) => {
  let input = null;
  state = read_cookie('input');
  switch(action.type) {
    case UPDATE_INPUT:
      input = action.input;
      bake_cookie('input', input);
      return input;
    case RESET_INPUT:
      input = '';
      bake_cookie('input', input);
      return input;
    default:
      return state;
  }
}
