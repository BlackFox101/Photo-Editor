import {importImages} from '../src/functions/functions';
import {Editor} from '../src/types';

describe('ImportImage function', () => {
  test('returns Editor', () => {
    const imageData: ImageData = {
      width: 100,
      height: 100,
      data: new Uint8ClampedArray(10000)
    }
    imageData.data.fill(255);
    const image: ImageData = {
      width: 10,
      height: 10,
      data: new Uint8ClampedArray(100)
    }
    image.data.fill(100);
    let editor: Editor = {
      canvas: imageData,
      selectedObject: null
    }
    let lastEditor: Editor = {
      canvas: imageData,
      selectedObject: image,
    }
    expect(importImages(editor, image)).toStrictEqual(lastEditor);
  });
})