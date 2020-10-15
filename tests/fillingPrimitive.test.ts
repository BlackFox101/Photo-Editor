import {fillingPrimitive} from '../functions';
import {Editor, Rectangle, Color} from '../type';

describe('changePrimitiveSize function', () => {
  test('returns Editor', () => {
    const color: Color = {
      r: 150,
      g: 255,
      b: 140,
      a: 0.5
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
    expect(fillingPrimitive(editor, rectangle, color)).toBe(editor);
  });
})