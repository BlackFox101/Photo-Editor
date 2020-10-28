import {deleteArea} from '../functions';
import {Editor} from '../type';

describe('deleteArea function', () => {
  test('returns Editor', () => {
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
      selectedObject: null,
      stateList: null
    };
    expect(deleteArea(editor)).toStrictEqual(lastEditor);
  });
})