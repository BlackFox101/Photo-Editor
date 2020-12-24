import {createStore} from "redux";
import {Editor} from "../types";
import {addClearCanvas} from "../functions/Canvas";
import {Tools} from "../components/Toolbar/Tools";
import editorReducers from "./redusers/editorReducer";

export type storeModel = {
  editor: Editor,
  currentTool: Tools
}

const editor: Editor = addClearCanvas(
  {
    canvas: new ImageData(0, 0),
    selectedObject: null,
  },
  {width: 800, height: 600}
);

export const initialState: storeModel = {
  editor: editor,
  currentTool: Tools.Options
}