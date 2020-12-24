import {
  Editor,
  Primitive,
  ArtObject,
  Area,
  TextBox,
  CoordinatesBox,
  Size,
  Color,
  Filter
} from "../types";
import {deepFreeze} from "../deepFreeze";

function importImages(editor: Editor, image: ImageData): Editor {
  return {
    ...editor,
    selectedObject: image
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
    selectedObject: area
  }
}

function moveArea(editor: Editor, coordinates: CoordinatesBox) {
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      coordinates
    }
  }
}

function cutArea(editor: Editor) {
  // Пиксели сделать белыми
  return {
    ...editor,
    selectedObject: null
  }
}

function deleteArea(editor: Editor) {
  // Пиксели сделать прозрачными

  return {
    ...editor,
    selectedObject: null
  }
}

function insertText(editor: Editor, text: TextBox) {
  return {
    ...editor,
    selectedObject: {...text}
  }
}

function changeTextSize(editor: Editor, size: Size) {
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      size: {...size}
    }
  }
}

function changeTextColor(editor: Editor, color: Color) {
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      color: {...color}
    }
  }
}

function changeTextPosition(editor: Editor, coordinates: CoordinatesBox) {
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      coordinates: {...coordinates}
    }
  }
}

function insertPrimitive(editor: Editor, primitive: Primitive) {
  return {
    ...editor,
    selectedObject: {...primitive}
  }
}

function changePrimitiveSize(editor: Editor, size: Size) {
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      size
    }
  }
}

function changePrimitivePosition(editor: Editor, coordinates: CoordinatesBox) {
    return {
      ...editor,
      selectedObject: {
        ...editor.selectedObject,
        coordinates
      }
    }
}

function fillingPrimitive(editor: Editor, color: Color) {
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      color
    }
  }
}

function insertArtObject(editor: Editor, artObject: ArtObject) {
  return {
    ...editor,
    selectedObject: {...artObject}
  }
}

function applyFilter(editor: Editor, filter: Filter) {
  if (filter == "red") {
    // Преобразовать все пиксели в canvas
  }
  return {
    ...editor,
    canvas: {
      ...editor.canvas
    }
  }
}

export {
  importImages,
  selectedArea,
  moveArea,
  cutArea,
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