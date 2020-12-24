import {Reducer} from "redux";
import {storeModel} from "../initialState";
import * as type from "../actions"


const editorReducers: Reducer = (state: storeModel, action) => {
  switch (action.type) {
    case type.CHANGE_CURRENT_TOOL:
      return {
        ...state,
        currentTool: action.Tool,
      }
    default:
      return state;
  }
}

export default editorReducers;