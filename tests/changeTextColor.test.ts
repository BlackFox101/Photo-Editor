import {changeTextColor} from '../functions';
import {Editor, TextBox, Color} from '../type';

describe('changeTextSize function', () => {
  test('returns Editor', () => {
    const color: Color = {
      r: 60,
      g: 50,
      b: 10,
      a: 0.5
    }
    const text: TextBox = {
      coordinates: {
        x: 10,
        y: 20,
      },
      size: {
        width: 20,
        height: 10
      },
      color: {
        r: 10,
        g: 30,
        b: 20,
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
        primitives: [],
        images: [],
        texts: [text],
      },
      selectedObject: null,
      stateList: null
    };
    expect(changeTextColor(editor, text, color)).toBe(editor);
  });
})