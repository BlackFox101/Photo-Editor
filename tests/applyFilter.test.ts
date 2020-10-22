import {applyFilter} from '../functions';
import {Editor, Filter} from '../type';

describe('changePrimitiveSize function', () => {
  test('returns Editor', () => {
    const filter: Filter =  'red'
    const editor: Editor = {
      canvas: {
        filter: 'green',
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
        filter: 'red',
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
    }
    expect(applyFilter(editor, filter)).toStrictEqual(lastEditor);
  });
})