import {deleteArea} from '../functions';
import {Editor} from '../type';

describe('deleteArea function', () => {
  test('returns Editor', () => {
    const editor: Editor = {
      canvas: {
        filter: null,
        height: 100,
        width: 100,
        dedicatedArea: {
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
        artObjects: [],
        primitives: [],
        images: [],
        texts: [],
      },
      selectedObject: null,
      stateList: null
    };
    expect(deleteArea(editor)).toBe(editor);
  });
})