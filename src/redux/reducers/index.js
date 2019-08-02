import { combineReducers } from 'redux';
import countReducer from './countReducer.js';
import backgroundColorReducer from './backgroundColorReducer.js';


export default combineReducers({
    countReducer,
    backgroundColorReducer
});