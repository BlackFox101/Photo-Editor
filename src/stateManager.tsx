import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Editor, StateList} from "./types";

let editor: Editor = {
  canvas: new ImageData(800, 600),
  selectedObject: null,
}

const stateList: StateList = {
  undo: [],
  redo: []
}

export function dispatch(func: Function, payload: any): void {
  editor = func(editor, payload);
  stateList.undo.push(editor.canvas)
}