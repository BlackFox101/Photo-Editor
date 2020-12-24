import {insertText} from '../src/functions/functions';
import {Editor, TextBox} from '../src/types';

describe('insertText function', () => {
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
    let editor: Editor = {
      canvas: imageData,
      selectedObject: null
    }

    let lastEditor: Editor = {
      canvas: imageData,
      selectedObject: {...text},
    }
    expect(insertText(editor, text)).toStrictEqual(lastEditor);
  });
})