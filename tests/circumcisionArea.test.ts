import {circumcisionArea} from '../functions';
import {Editor} from '../type';

describe('circumcisionArea function', () => {
  test('returns Editor', () => {
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
          color: {
            r: 1,
            g: 20,
            b: 150,
            a: 1
          }
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
          coordinates: {
            x: 10,
            y: 20,
          },
          size: {
            height: 10,
            width: 10,
          },
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1
          }
        },
        artObjects: [],
        primitives: [],
        images: [],
        texts: [],
      },
      selectedObject: null,
      stateList: null
    };
    expect(circumcisionArea(editor)).toStrictEqual(lastEditor);
  });
})