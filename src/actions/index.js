import { SELECT_DISH_TYPE } from '../constants';


export const selectDishType = index => ({
  type: SELECT_DISH_TYPE,
  index
})

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
