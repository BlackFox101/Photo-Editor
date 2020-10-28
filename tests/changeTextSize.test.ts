import {changeTextSize} from '../functions';
import {Editor, TextBox, Size} from '../type';

describe('changeTextSize function', () => {
  test('returns Editor', () => {
    const size: Size = {
        width: 50,
        height: 40
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
        size: {...size},
        color: {
          r: 1,
          g: 20,
          b: 150,
          a: 1
        }
      },
      stateList: null
    };
    expect(changeTextSize(editor, size)).toStrictEqual(lastEditor);
  });
})