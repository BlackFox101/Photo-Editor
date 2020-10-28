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
import {deepFreeze} from "./deepFreeze";

function importImages(editor: Editor, image: Image) {
  deepFreeze(editor);
  return {
    ...editor,
    selectedObject: {...image}
  }
}

/*function exportImages(Editor: Editor) {
  let link = document.createElement("a");
  let imageURI = Editor.canvas
  link.href = imageURI;

  return Editor
}*/

function selectedArea(editor: Editor, area: Area) {
  deepFreeze(editor);
  return {
    ...editor,
    selectedObject: {...area}
  }
}

function moveArea(editor: Editor, coordinates: CoordinatesBox) {
  deepFreeze(editor);
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      coordinates
    }
  }
}

function circumcisionArea(editor: Editor) {
  deepFreeze(editor);
  let color = {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  }
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      color
    }
  }
}

function deleteArea(editor: Editor) {
  deepFreeze(editor);

  return {
    ...editor,
    selectedObject: null
  }
}

function insertText(editor: Editor, text: TextBox) {
  deepFreeze(editor);
  return {
    ...editor,
    selectedObject: {...text}
  }
}

function changeTextSize(editor: Editor, size: Size) {
  deepFreeze(editor);
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      size: {...size}
    }
  }
}

function changeTextColor(editor: Editor, color: Color) {
  deepFreeze(editor);
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      color: {...color}
    }
  }
}

function changeTextPosition(editor: Editor, coordinates: CoordinatesBox) {
  deepFreeze(editor);
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      coordinates: {...coordinates}
    }
  }
}

function insertPrimitive(editor: Editor, primitive: Primitive) {
  deepFreeze(editor);
  return {
    ...editor,
    selectedObject: {...primitive}
  }
}

function changePrimitiveSize(editor: Editor, size: Size) {
  deepFreeze(editor);
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      size
    }
  }
}

function changePrimitivePosition(editor: Editor, coordinates: CoordinatesBox) {
  deepFreeze(editor);
    return {
      ...editor,
      selectedObject: {
        ...editor.selectedObject,
        coordinates
      }
    }
}

function fillingPrimitive(editor: Editor, color: Color) {
  deepFreeze(editor);
  return {
    ...editor,
    selectedObject: {
      ...editor.selectedObject,
      color
    }
  }
}

function insertArtObject(editor: Editor, artObject: ArtObject) {
  deepFreeze(editor);
  return {
    ...editor,
    selectedObject: {...artObject}
  }
}

function applyFilter(editor: Editor, filter: Filter) {
  deepFreeze(editor);
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