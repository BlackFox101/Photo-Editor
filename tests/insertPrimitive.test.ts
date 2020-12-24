import {insertPrimitive} from '../src/functions/functions';
import {Editor, Rectangle} from '../src/types';

describe('insertPrimitive function', () => {
  test('returns Editor', () => {
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
    const imageData: ImageData = {
      width: 100,
      height: 100,
      data: new Uint8ClampedArray(10000)
    }
    imageData.data.fill(255);
    const editor: Editor = {
      canvas: imageData,
      selectedObject: null
    }
    const lastEditor: Editor = {
      canvas: imageData,
      selectedObject: {...rectangle}
    }
    expect(insertPrimitive(editor, rectangle)).toStrictEqual(lastEditor);
  });
})