import {moveArea} from '../functions';
import {CoordinatesBox, Editor} from '../type';

describe('moveArea function', () => {
  test('returns Editor', () => {
    const coordinates: CoordinatesBox = {
      x: 0,
      y: 0
    };
    const editor: Editor = {
      canvas: {
        filter: null,
        height: 100,
        width: 100,
        dedicatedArea: {
          coordinates: {
            x: 10,
            y: 20,
          },
          size: {
            height: 10,
            width: 10,
          },
          color: null
        },
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
        dedicatedArea: {
          coordinates: coordinates,
          size: {
            height: 10,
            width: 10,
          },
          color: null
        },
        artObjects: [],
        primitives: [],
        images: [],
        texts: [],
      },
      selectedObject: null,
      stateList: null
    };
    expect(moveArea(editor, coordinates)).toStrictEqual(lastEditor);
  });
})