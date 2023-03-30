import { createStore , applyMiddleware } from "redux";
import rootReducer from "./redux/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const Store = createStore(persistedReducer , composeWithDevTools(applyMiddleware(thunk))) ;
const persistor = persistStore(Store);
export { Store, persistor };
