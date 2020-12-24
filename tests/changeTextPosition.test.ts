import {changeTextPosition} from '../src/functions/functions';
import {Editor, CoordinatesBox, TextBox, Color} from '../src/types';

describe('changeTextPosition function', () => {
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
    const coordinates: CoordinatesBox = {
      x: 50,
      y: 50
    }
    const lastEditor: Editor = {
      canvas: imageData,
      selectedObject: {
        coordinates: {
          x: 50,
          y: 50
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
      },
    }
    expect(changeTextPosition(editor, coordinates)).toStrictEqual(lastEditor);
  });
})