import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import { authReducer } from "./Auth/Reducer";
import { thunk } from "redux-thunk";

const rootReducers=combineReducers({
    auth:authReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))