import {changeTextPosition} from '../functions';
import {Editor, CoordinatesBox} from '../types';

describe('changeTextPosition function', () => {
  test('returns Editor', () => {
    const coordinates = {
      x: 40,
      y: 50
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
          y: 30
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
          x: 40,
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
        }
      },
      stateList: null
    };
    expect(changeTextPosition(editor, coordinates)).toStrictEqual(lastEditor);
  });
})