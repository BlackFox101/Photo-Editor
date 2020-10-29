import {insertPrimitive} from '../functions';
import {Editor, Rectangle} from '../types';

describe('insertPrimitive function', () => {
  test('returns Editor', () => {
    const rectangle: Rectangle = {
      coordinates: {
        x: 10,
        y: 20,
      },
      size: {
        height: 10,
        width: 10,
      },
      color: {
        r: 40,
        g: 50,
        b: 60,
        a: 1
      }
    }
    const editor: Editor = {
      canvas: {
        filter: null,
        height: 100,
        width: 100,
        data: {
          width: 100,
          height: 100
        }
      },
      selectedObject: null
      ,
      stateList: null
    };
    const lastEditor: Editor = {
      canvas: {
        filter: null,
        height: 100,
        width: 100,
        data: {
          width: 100,
          height: 100
        }
      },
      selectedObject: {...rectangle},
      stateList: null
    };
    expect(insertPrimitive(editor, rectangle)).toStrictEqual(lastEditor);
  });
})