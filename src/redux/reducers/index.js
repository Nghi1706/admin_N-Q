import { combineReducers } from "redux";
import posts from './post'
import schedule from './schedule'
export default combineReducers({
    posts, schedule
})