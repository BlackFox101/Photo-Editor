import {changeTextPosition} from '../functions';
import {Editor, TextBox, CoordinatesBox} from '../type';

describe('changeTextPosition function', () => {
  test('returns Editor', () => {
    const coordinates: CoordinatesBox = {
      x: 40,
      y: 50
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
    const lastText: TextBox = {
      coordinates: {...coordinates},
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
    }
    expect(changeTextPosition(editor, coordinates)).toStrictEqual(editor);
  });
})