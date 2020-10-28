import {applyFilter} from '../functions';
import {Editor, Filter} from '../type';

describe('changePrimitiveSize function', () => {
  test('returns Editor', () => {
    const filter: Filter =  "red"
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
        filter: "red",
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
    expect(applyFilter(editor, filter)).toStrictEqual(lastEditor);
  });
})