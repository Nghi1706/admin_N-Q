import { combineReducers } from "redux";
import posts from './post'
import schedule from './schedule'
import info from './info'
export default combineReducers({
    posts, schedule, info
})