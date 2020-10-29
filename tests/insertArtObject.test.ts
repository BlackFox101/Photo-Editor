import {insertArtObject} from '../functions';
import {Editor, ArtObject} from '../types';

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
    const editor: Editor = {
      canvas: {
        filter: null,
        height: 100,
        width: 100,
        data: {
          width: 100,
          height: 100
        }
      },
      selectedObject: null,
      stateList: null
    };
    const lastEditor: Editor = {
      canvas: {
        filter: null,
        height: 100,
        width: 100,
        data: {
          width: 100,
          height: 100
        }
      },
      selectedObject: {...artObject},
      stateList: null
    };
    expect(insertArtObject(editor, artObject)).toStrictEqual(lastEditor);
  });
})