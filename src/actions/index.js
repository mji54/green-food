import { START_TIMER, UPDATE_TIME } from '../constants';

export const startTimer = time => ({
  type: START_TIMER,
  time
})

export const updateTime = () => ({
  type: UPDATE_TIME
})
