import {insertText} from '../functions';
import {Editor, TextBox} from '../type';

describe('insertText function', () => {
  test('returns Editor', () => {
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
        artObjects: [],
        primitives: [],
        images: [],
        texts: [text],
      },
      selectedObject: null,
      stateList: null
    }
    expect(insertText(editor, text)).toStrictEqual(lastEditor);
  });
})