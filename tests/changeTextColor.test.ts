import {changeTextColor} from '../src/functions/functions';
import {Editor, Color, TextBox, Size} from '../src/types';

describe('changeTextColor function', () => {
  test('returns Editor', () => {
    const imageData: ImageData = {
      width: 100,
      height: 100,
      data: new Uint8ClampedArray(10000)
    }
    imageData.data.fill(255);
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
      canvas: imageData,
      selectedObject: text
    }
    const color: Color = {
      r: 50,
      g: 40,
      b: 70,
      a: 1
    }
    const lastEditor: Editor = {
      canvas: imageData,
      selectedObject: {
        coordinates: {
          x: 10,
          y: 20,
        },
        size: {
          width: 20,
          height: 10
        },
        color: {
          r: 50,
          g: 40,
          b: 70,
          a: 1
        }
      },
    }
    expect(changeTextColor(editor, color)).toStrictEqual(lastEditor);
  });
})