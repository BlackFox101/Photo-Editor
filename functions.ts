import {
  Editor,
  Primitive,
  Image,
  ArtObject,
  Area,
  TextBox,
  CoordinatesBox,
  Size,
  Color,
  Filter
} from "./type";

function importImages(editor: Editor, image: Image) {
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      images: [...editor.canvas.images, image]
    }
  }
}

/*function exportImages(Editor: Editor) {
  let link = document.createElement("a");
  let imageURI = Editor.canvas
  link.href = imageURI;

  return Editor
}*/

function selectedArea(editor: Editor, area: Area) {
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      dedicatedArea: area
    }
  }
}

function moveArea(editor: Editor, coordinates: CoordinatesBox) {
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      dedicatedArea: {
        ...editor.canvas.dedicatedArea,
        coordinates: coordinates
      }
    }
  }
}

function circumcisionArea(editor: Editor) {
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      dedicatedArea: {
        ...editor.canvas.dedicatedArea,
        color: {
          ...editor.canvas.dedicatedArea.color,
          r: 255,
          g: 255,
          b: 255,
          a: 1
        }
      }
    }
  }
}

function deleteArea(editor: Editor) {
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      dedicatedArea: {
        ...editor.canvas.dedicatedArea,
        color: {
          ...editor.canvas.dedicatedArea.color,
          a: 0
          }
      }
    }
  }
}

function insertText(editor: Editor, text: TextBox) {
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      texts: [...editor.canvas.texts, text]
    }
  }
}

function changeTextSize(editor: Editor, size: Size) {
  const length = editor.canvas.texts.length;
  let newEditor = {
    ...editor,
    canvas: {
      ...editor.canvas,
      texts: [...editor.canvas.texts]
    }}
  newEditor.canvas.texts[length-1].size = {...size}

  return newEditor
}

function changeTextColor(editor: Editor, color: Color) {
  const length = editor.canvas.texts.length;
  let newEditor = {
    ...editor,
    canvas: {
      ...editor.canvas,
      texts: [...editor.canvas.texts]
    }}
  newEditor.canvas.texts[length-1].color = {...color}

  return newEditor
}

function changeTextPosition(editor: Editor, coordinates: CoordinatesBox) {
  const length = editor.canvas.texts.length;
  let newEditor = {
    ...editor,
    canvas: {
      ...editor.canvas,
      texts: [...editor.canvas.texts]
    }}
  newEditor.canvas.texts[length-1].coordinates = {...coordinates}

  return newEditor
}

function insertPrimitive(editor: Editor, primitive: Primitive) {
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      primitives: [...editor.canvas.primitives, primitive]
    }
  }
}

function changePrimitiveSize(editor: Editor, size: Size) {
  const length = editor.canvas.primitives.length;
  let newEditor = {
    ...editor,
    canvas: {
      ...editor.canvas,
      primitives: [...editor.canvas.primitives]
    }}
  newEditor.canvas.primitives[length-1].size = {...size}

  return newEditor
}

function changePrimitivePosition(editor: Editor, coordinates: CoordinatesBox) {
  const length = editor.canvas.primitives.length;
  let newEditor = {
    ...editor,
    canvas: {
      ...editor.canvas,
      primitives: [...editor.canvas.primitives]
    }}
  newEditor.canvas.primitives[length-1].coordinates = {...coordinates}

  return newEditor
}

function fillingPrimitive(editor: Editor, color: Color) {
  const length = editor.canvas.primitives.length;
  let newEditor = {
    ...editor,
    canvas: {
      ...editor.canvas,
      primitives: [...editor.canvas.primitives]
    }}
  newEditor.canvas.primitives[length-1].color = {...color}

  return newEditor
}

function insertArtObject(editor: Editor, artObject: ArtObject) {
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      artObjects: [...editor.canvas.artObjects, artObject]
    }
  }
}

function applyFilter(editor: Editor, filter: Filter) {
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      filter: filter
    }
  }
}

export {
  importImages,
  selectedArea,
  moveArea,
  circumcisionArea,
  deleteArea,
  insertText,
  changeTextSize,
  changeTextColor,
  changeTextPosition,
  insertPrimitive,
  changePrimitiveSize,
  changePrimitivePosition,
  fillingPrimitive,
  insertArtObject,
  applyFilter
}