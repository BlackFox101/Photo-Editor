import {changePrimitiveSize} from '../functions';
import {Editor, Rectangle, Size} from '../type';

describe('changePrimitiveSize function', () => {
  test('returns Editor', () => {
    const size: Size = {
      width: 50,
      height: 30
    }
    const rectangle: Rectangle = {
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
    }
    const editor: Editor = {
      canvas: {
        filter: null,
        height: 100,
        width: 100,
        dedicatedArea: null,
        artObjects: [],
        primitives: [rectangle],
        images: [],
        texts: [],
      },
      selectedObject: null,
      stateList: null
    };
    expect(changePrimitiveSize(editor, rectangle, size)).toBe(editor);
  });
})