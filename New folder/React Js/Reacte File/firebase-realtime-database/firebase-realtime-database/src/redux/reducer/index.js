import { combineReducers } from "redux";
import StudentReducer from "./studentReducer";

const rootReducer = combineReducers({
    student : StudentReducer
})

export default rootReducer;