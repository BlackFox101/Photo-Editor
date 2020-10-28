import {fillingPrimitive} from '../functions';
import {Editor, Rectangle, Color} from '../type';

describe('fillingPrimitive function', () => {
  test('returns Editor', () => {
    const color: Color = {
      r: 150,
      g: 255,
      b: 140,
      a: 1
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
        size: {
          height: 10,
          width: 10
        },
        color: {...color}
      },
      stateList: null
    };
    expect(fillingPrimitive(editor, color)).toStrictEqual(lastEditor);
  });
})