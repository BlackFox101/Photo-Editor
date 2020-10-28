import {moveArea} from '../functions';
import {Area, CoordinatesBox, Editor} from '../type';

describe('moveArea function', () => {
  test('returns Editor', () => {
    const area: Area = {
      coordinates: {
        x: 0,
        y: 0
      },
      size: {
        width: 10,
        height: 10
      },
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      }
    }
    const coordinates: CoordinatesBox = {
      x: 15,
      y: 20
    };
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
      selectedObject: {...area},
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
      selectedObject: {
        coordinates: {
          x: 15,
          y: 20
        },
        size: {
          width: 10,
          height: 10
        },
        color: {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        }},
      stateList: null
    };
    expect(moveArea(editor, coordinates)).toStrictEqual(lastEditor);
  });
})