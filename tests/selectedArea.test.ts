import {selectedArea} from '../functions';
import {Area, Editor} from '../types';

describe('selectedArea function', () => {
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
      selectedObject: {coordinates: {
          x: 10,
          y: 50
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
      selectedObject: {...area},
      stateList: null
    };
    expect(selectedArea(editor, area)).toStrictEqual(lastEditor);
  });
})