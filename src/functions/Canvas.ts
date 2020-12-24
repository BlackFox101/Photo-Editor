import {Editor, Size} from "../types";

export function addClearCanvas(editor: Editor, size: Size) {
  const imageData = new ImageData(size.width, size.height);
  imageData.data.fill(255);
  return {
    ...editor,
    canvas: imageData
  }
}

export function exportCanvas(props: string) {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (canvas) {
    canvas.toBlob(function(blob) {
      if (blob) {
        let URLObj = window.URL || window.webkitURL;
        let a = document.createElement("a");
        a.href = URLObj.createObjectURL(blob);
        document.body.appendChild(a);
        a.download = 'image';
        a.click();
        document.body.removeChild(a);
      }
    }, 'image/' + props, 0.95);
  }
}