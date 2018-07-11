// import { SIGNED_IN, SET_GOALS } from '../constants';
import { UPDATE_SEARCH, FILTER_MENU} from '../constants';

// export const logUser = email => ({
//     type: SIGNED_IN,
//     email
// });
//
// export const setGoals = goals => ({
//   type: SET_GOALS,
//   goals
// });
export const updateSearch = input => ({
  type: UPDATE_SEARCH,
  term: input
});

export const filterMenu = term => ({
  type: FILTER_MENU,
  term
});
