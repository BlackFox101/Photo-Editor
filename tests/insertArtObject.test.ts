import {insertArtObject} from '../src/functions/functions';
import {Editor, ArtObject} from '../src/types';

describe('changePrimitiveSize function', () => {
  test('returns Editor', () => {
    const artObject: ArtObject = {
      url: '../ArtObjects/Smile',
      coordinates: {
        x: 20,
        y: 10
      },
      size: {
        width: 40,
        height: 50
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
    };
    const lastEditor: Editor = {
      canvas: imageData,
      selectedObject: {...artObject}
    }
    expect(insertArtObject(editor, artObject)).toStrictEqual(lastEditor);
  });
})