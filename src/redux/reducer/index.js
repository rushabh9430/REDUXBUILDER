import { combineReducers } from "redux";
import CounterReducer from "./Counter.reducer";

const rootReducer = combineReducers({
    CounterReducer,
})
export default rootReducer