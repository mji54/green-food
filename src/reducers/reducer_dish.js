import { SELECT_DISH_TYPE, SEARCH_RESULT } from '../constants.js';

import { bake_cookie, read_cookie } from 'sfcookies';
import { MENU } from '../menu';

const findDishes = (id) => {
  // console.log(id);
  let meal = MENU.filter( meal => { console.log(meal.id===id); return meal.id === id});
  // console.log(meal);
  return [{
      typeId: meal[0].id,
      dishes: meal[0].dishes
  }];
}

// selected-meal-type

export default (state = [], action) => {
  let dishes = [];
  state = read_cookie('dishes');
  switch(action.type) {
    case SELECT_DISH_TYPE:
      // console.log("select dish type");
      // console.log(action.index);
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
