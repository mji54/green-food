import { SELECT_DISH_TYPE, SEARCH_RESULT } from '../constants.js';

import { bake_cookie, read_cookie } from 'sfcookies';
import { MENU } from '../menu';

const findDishes = (id) => {
  if (id < 1 || id > 3) {
    let regroup = [];
    MENU.map( meal => {
      regroup.push({typeId: meal.id, dishes: meal.dishes})
    })
    return regroup;
  }
  let meal = MENU.filter( meal => meal.id === id);
  return [{
      typeId: meal[0].id,
      dishes: meal[0].dishes
  }];
}

export default (state = [], action) => {
  let dishes = [];
  state = read_cookie('dishes');
  switch(action.type) {
    case SELECT_DISH_TYPE:
      dishes = findDishes(action.index);
      bake_cookie('dishes', dishes);
      return dishes;

    case SEARCH_RESULT:
      dishes = action.array;
      bake_cookie('dishes', dishes);
      return dishes;

    default:
      return state;
  }
}
