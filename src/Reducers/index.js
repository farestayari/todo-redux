import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import placesToVisitReducer from "./placesToVisitReducer";

export default combineReducers({ todosReducer, placesToVisitReducer });
