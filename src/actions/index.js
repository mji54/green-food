import { SELECT_DISH_TYPE, UPDATE_INPUT, SEARCH_RESULT } from '../constants';


export const selectDishType = index => ({
  type: SELECT_DISH_TYPE,
  index
})

export const updateInput = input => ({
  type: UPDATE_INPUT,
  input
})

export const searchResult = array => ({
  type: SEARCH_RESULT,
  array
})
//
// export const searchForDish = input => ({
//   type: SEARCH_FOR_DISH,
//   input
// })

// export const incrementTimer = () => ({
//   type: INCREMENT_TIMER
// })

// export const startTimer = time => ({
//   type: START_TIMER,
//   time
// })
//
// export const updateTime = () => ({
//   type: UPDATE_TIME
// })
