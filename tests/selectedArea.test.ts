import {selectedArea} from '../functions';
import {Area, Editor} from '../type';

describe('selectedArea function', () => {
  test('returns Editor', () => {
    const area: Area = {
      coordinates: {
        x: 0,
        y: 0
      },
      size: {
        width: 10,
        height: 10
      },
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: 0
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
        dedicatedArea: area,
        artObjects: [],
        primitives: [],
        images: [],
        texts: [],
      },
      selectedObject: null,
      stateList: null
    };
    expect(selectedArea(editor, area)).toStrictEqual(lastEditor);
  });
})