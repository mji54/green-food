import { combineReducers } from 'redux';
import dish from './reducer_dish';
import input from './reducer_search';
// import goals from './reducer_goals';

export default combineReducers({
  dish,
  input
})
