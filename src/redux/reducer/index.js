import { combineReducers } from "redux";
import CounterReducer from "./Counter.reducer";
import { TeamREducer } from "./Team.REducer";

const rootReducer = combineReducers({
    CounterReducer,
    TeamREducer
})
export default rootReducer