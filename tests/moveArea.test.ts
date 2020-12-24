import {moveArea} from '../src/functions/functions';
import {Area, CoordinatesBox, Editor} from '../src/types';

describe('moveArea function', () => {
  test('returns Editor', () => {
    const imageData: ImageData = {
      width: 100,
      height: 100,
      data: new Uint8ClampedArray(10000)
    }
    imageData.data.fill(255);

    let editor: Editor = {
      canvas: imageData,
      selectedObject: {
        coordinates: {
          x: 10,
          y: 10
        },
        size: {
          width: 10,
          height: 10
        },
      }
    }
    const coordinates: CoordinatesBox = {
      x: 15,
      y: 20
    };
    const lastArea: Area = {
      coordinates: {...coordinates},
      size: {
        width: 10,
        height: 10
      },
    };
    let lastEditor: Editor = {
      canvas: imageData,
      selectedObject: lastArea,
    }
    expect(moveArea(editor, coordinates)).toStrictEqual(lastEditor);
  });
})