import {changeTextSize} from '../functions';
import {Editor, TextBox, Size} from '../type';

describe('changeTextSize function', () => {
  test('returns Editor', () => {
    const size: Size = {
        width: 50,
        height: 40
    }
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
    const lastTest: TextBox = {
      coordinates: {
        x: 10,
        y: 20,
      },
      size: {...size},
      color: {
        r: 10,
        g: 30,
        b: 20,
        a: 1
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
        texts: [text],
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
        artObjects: [],
        primitives: [],
        images: [],
        texts: [text],
      },
      selectedObject: null,
      stateList: null
    };
    expect(changeTextSize(editor, size)).toStrictEqual(lastEditor);
  });
})