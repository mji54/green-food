import { combineReducers } from 'redux';
import dishes from './reducer_dish';
import input from './reducer_search';

export default combineReducers({
  dishes,
  input
})
