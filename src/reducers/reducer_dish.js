import { SELECT_DISH_TYPE } from '../constants.js';

import { bake_cookie, read_cookie } from 'sfcookies';

// let timeLog = {
//   currentTime: Date.now(),
//   expireTime: null
// }

export default (state = -1, action) => {
  let index = null;
  state = read_cookie('index');
  switch(action.type) {
    case SELECT_DISH_TYPE:
      index = action.index;
      bake_cookie('index', index);
      return index;
    default:
      return state;
  }
}
