import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import UserReducer from "./reducers/user";
import thunk from "redux-thunk";

const reducer = combineReducers({
  user: UserReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
