import {changePrimitiveSize} from '../src/functions/functions';
import {CoordinatesBox, Editor, Rectangle, Size} from '../src/types';

describe('changePrimitiveSize function', () => {
  test('returns Editor', () => {
    const size: Size = {
      width: 50,
      height: 30
    }
    const rectangle: Rectangle = {
      coordinates: {
        x: 10,
        y: 20
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
    const imageData: ImageData = {
      width: 100,
      height: 100,
      data: new Uint8ClampedArray(10000)
    }
    imageData.data.fill(255);
    const editor: Editor = {
      canvas: imageData,
      selectedObject: rectangle
    }
    const lastEditor: Editor = {
      canvas: imageData,
      selectedObject: {
        coordinates: {
          x: 10,
          y: 20
        },
        size: {
          width: 50,
          height: 30
        },
        color: {
          r: 40,
          g: 50,
          b: 60,
          a: 1
        }
      }
    }
    expect(changePrimitiveSize(editor, size)).toStrictEqual(lastEditor);
  });
})