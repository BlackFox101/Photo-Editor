import {changePrimitiveSize} from '../functions';
import {Editor, Size} from '../types';

describe('changePrimitiveSize function', () => {
  test('returns Editor', () => {
    const size: Size = {
      width: 50,
      height: 30
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
        coordinates: {
          x: 10,
          y: 20,
        },
        size: {...size},
        color: {
          r: 40,
          g: 50,
          b: 60,
          a: 1
        }
      },
      stateList: null
    };
    expect(changePrimitiveSize(editor, size)).toStrictEqual(lastEditor);
  });
})