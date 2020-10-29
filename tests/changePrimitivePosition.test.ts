import {changePrimitivePosition} from '../functions';
import {Editor, CoordinatesBox} from '../types';

describe('changePrimitivePosition function', () => {
  test('returns Editor', () => {
    const coordinates: CoordinatesBox = {
      x: 30,
      y: 50,
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
      selectedObject: {
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
      },
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
        coordinates: {...coordinates},
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
      },
      stateList: null
    };
    expect(changePrimitivePosition(editor, coordinates)).toStrictEqual(lastEditor);
  });
})