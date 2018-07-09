import { START_TIMER, UPDATE_TIME } from '../constants.js'

let timeLog = {
  currentTime: Date.now(),
  expireTime: null
}

export default (state = [timeLog], action) => {
  let new_time = null;
  // console.log(state.length);
  switch(action.type) {
    case START_TIMER:
      const { time } = action;
      // {time} is the "timeout" time
      new_time = [...state,
        {
          currentTime: state[state.length-1].currentTime,
          expireTime: state[state.length-1].currentTime + time
        }
      ]
      console.log(new_time);
      return new_time;
    case UPDATE_TIME:
      // {time} is the "expireTime"
      new_time = [...state,
        {
          currentTime: Date.now(),
          expireTime: null
        }
      ]
      console.log(new_time);
      return new_time;
    default:
      return state;
  }
}
