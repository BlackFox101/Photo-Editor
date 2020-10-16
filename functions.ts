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

function importImages(Editor: Editor, Image: Image) {
  Editor.canvas.images.push(Image)

  return Editor
}

/*function exportImages(Editor: Editor) {
  let link = document.createElement("a");
  let imageURI = Editor.canvas
  link.href = imageURI;

  return Editor
}*/

function selectedArea(Editor: Editor, area: Area) {
  Editor.canvas.dedicatedArea = area;

  return Editor
}

function moveArea(Editor: Editor, coordinates: CoordinatesBox) {
  Editor.canvas.dedicatedArea.coordinates = coordinates

  return Editor
}

function circumcisionArea(Editor: Editor) {
  Editor.canvas.dedicatedArea.color.r = 255
  Editor.canvas.dedicatedArea.color.g = 255
  Editor.canvas.dedicatedArea.color.b = 255
  Editor.canvas.dedicatedArea.color.a = 1

  return Editor
}

function deleteArea(Editor: Editor) {
  Editor.canvas.dedicatedArea.color.a = 0

  return Editor
}

function insertText(Editor: Editor, text: TextBox) {
  Editor.canvas.texts.push(text)

  return Editor
}

function changeTextSize(Editor: Editor, text: TextBox, size: Size) {
  let index = Editor.canvas.texts.indexOf(text);
  Editor.canvas.texts[index].size = size

  return Editor
}

function changeTextColor(Editor: Editor, text: TextBox, color: Color) {
  let index = Editor.canvas.texts.indexOf(text);
  Editor.canvas.texts[index].color = color

  return Editor
}

function changeTextPosition(Editor: Editor, text: TextBox, coordinates: CoordinatesBox) {
  let index = Editor.canvas.texts.indexOf(text);
  Editor.canvas.texts[index].coordinates = coordinates

  return Editor
}

function insertPrimitive(Editor: Editor, primitive: Primitive) {
  Editor.canvas.primitives.push(primitive)

  return Editor
}

function changePrimitiveSize(Editor: Editor, primitive: Primitive, size: Size) {
  let index = Editor.canvas.primitives.indexOf(primitive);
  Editor.canvas.primitives[index].size = size

  return Editor
}

function changePrimitivePosition(Editor: Editor, primitive: Primitive, coordinates: CoordinatesBox) {
  let index = Editor.canvas.primitives.indexOf(primitive);
  Editor.canvas.primitives[index].coordinates = coordinates

  return Editor
}

function fillingPrimitive(Editor: Editor, primitive: Primitive, color: Color) {
  let index = Editor.canvas.primitives.indexOf(primitive);
  Editor.canvas.primitives[index].color = color

  return Editor
}

function insertArtObject(Editor: Editor, artObject: ArtObject) {
  Editor.canvas.artObjects.push(artObject)

  return Editor
}

function applyFilter(Editor: Editor, filter: Filter) {
  Editor.canvas.filter = filter

  return Editor
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