import {changeTextColor} from '../functions';
import {Editor, Color} from '../types';

describe('changeTextColor function', () => {
  test('returns Editor', () => {
    const color: Color = {
      r: 60,
      g: 50,
      b: 10,
      a: 0.5
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
          y: 50
        },
        size: {
          width: 10,
          height: 10
        },
        color: {
          r: 1,
          g: 20,
          b: 150,
          a: 1
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
      selectedObject: {
        coordinates: {
          x: 10,
          y: 50,
        },
        size: {
          width: 10,
          height: 10
        },
        color: {...color}
      },
      stateList: null
    };
    expect(changeTextColor(editor, color)).toStrictEqual(lastEditor);
  });
})