import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import charactersReducer from "./charactersDucks";
import searchReducer from "./searchsDucks";
import profileReducer from "./profileDucks";

const rootReducer = combineReducers({
  characters: charactersReducer,
  search: searchReducer,
  profile: profileReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
