import {circumcisionArea} from '../functions';
import {Editor} from '../type';

describe('circumcisionArea function', () => {
  test('returns Editor', () => {
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
      selectedObject: {
        coordinates: {
          x: 10,
          y: 50
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
        }},
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
      selectedObject: {
        coordinates: {
          x: 10,
          y: 50
        },
        size: {
          width: 10,
          height: 10
        },
        color: {
          r: 255,
          g: 255,
          b: 255,
          a: 1
        }},
      stateList: null
    };
    expect(circumcisionArea(editor)).toStrictEqual(lastEditor);
  });
})