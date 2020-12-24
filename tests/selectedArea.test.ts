import {selectedArea} from '../src/functions/functions';
import {Area, Editor} from '../src/types';

describe('selectedArea function', () => {
  test('returns Editor', () => {
    const imageData: ImageData = {
      width: 100,
      height: 100,
      data: new Uint8ClampedArray(10000)
    }
    imageData.data.fill(255);
    let editor: Editor = {
      canvas: imageData,
      selectedObject: null
    }
    const area: Area = {
      coordinates: {
        x: 10,
        y: 10
      },
      size: {
        width: 10,
        height: 10
      },
    }
    let lastEditor: Editor = {
      canvas: imageData,
      selectedObject: area,
    }
    expect(selectedArea(editor, area)).toStrictEqual(lastEditor);
  });
})