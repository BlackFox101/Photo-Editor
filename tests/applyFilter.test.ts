import {applyFilter} from '../src/functions/functions';
import {Editor, Filter} from '../src/types';

describe('changePrimitiveSize function', () => {
  test('returns Editor', () => {
    const filter: Filter =  "red";
    const imageData: ImageData = {
      width: 100,
      height: 100,
      data: new Uint8ClampedArray(10000)
    }
    imageData.data.fill(255);
    const editor: Editor = {
      canvas: imageData,
      selectedObject: null
    };
    const lastEditor: Editor = {
      canvas: imageData,
      selectedObject: null
    }
    expect(applyFilter(editor, filter)).toStrictEqual(lastEditor);
  });
})