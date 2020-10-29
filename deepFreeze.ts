import { Canvas, SelectedObject, StateList } from "./types";

function deepFreeze(o: { [x: string]: any; canvas?: Canvas; selectedObject?: SelectedObject; stateList?: StateList; hasOwnProperty?: any; }) {
  Object.freeze(o);

  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop)
      && o[prop] !== null
      && (typeof o[prop] === "object" || typeof o[prop] === "function")
      && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });

  return o;
}

export {deepFreeze}