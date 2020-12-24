import {createStore} from "redux";
import editorReducers from "./redusers/editorReducer";
import {initialState} from "./initialState";

let store = createStore(editorReducers, initialState);
export default store;