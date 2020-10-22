import {insertArtObject} from '../functions';
import {Editor, ArtObject} from '../type';

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
        dedicatedArea: null,
        artObjects: [],
        primitives: [],
        images: [],
        texts: [],
      },
      selectedObject: null,
      stateList: null
    };
    const lastEditor: Editor = {
      canvas: {
        filter: null,
        height: 100,
        width: 100,
        dedicatedArea: null,
        artObjects: [artObject],
        primitives: [],
        images: [],
        texts: [],
      },
      selectedObject: null,
      stateList: null
    }
    expect(insertArtObject(editor, artObject)).toStrictEqual(lastEditor);
  });
})