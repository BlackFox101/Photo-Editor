let Editor = {
  StateList,
  Canvas,
  Filters,
  CurrentState
}

let StateList = {
  Undo,
  Redo
}

let Undo = {
  stack: []
}

let Redo = {
  stack: []
}

let Canvas = {
  Images,
  Text,
  ArtObject, // Смайлики и т.д
  Primitive: Rectangle,
  Area
}

let Images = {
  url: './img.png',
  x: 10,
  y: 10,
  size: 100
}

let Text = {
  x: 10,
  y: 10,
  size: 10,
  text: 'Привет'
}

let ArtObject = {
  url: './Art.jpg',
  x: 10,
  y: 10,
  size: 100
}

let Circle = {
  radius: 5,
  x: 10,
  y: 10
}

let Rectangle = {
  height: 10,
  width: 5,
  x: 20,
  y: 20
}

let Triangle = {
  length: 10,
  height: 15,
  x1: 10,
  y1: 10,
  x2: 20,
  y2: 10,
  x3: 15,
  y3: 20
}

let Area = {
  x: 10,
  y: 10,
  height: 50,
  width: 50
}

let Filters = {
  red: '#FF0000',
  black: '#000000',
  blue: '#0000FF'
}

let CurrentState = {
  Color: '#FF0000',
  Font: 'Roboto',
  FontSize: 10,
  PrimitiveSize: 10,
  PrimitivePosition
}

let PrimitivePosition = {
  x: 10,
  y: 10
}

function importImages(Editor, img) {
  return Editor
}

function exportImages(Canvas) {
  return Canvas
}


function areaSelection(Editor) {
  return Editor
}

function moveArea(Editor) {
  return Editor
}

function Circumcision(Editor) {
  return Editor
}

function DeleteObject(Editor) {
  return Editor
}

function InsertText(Editor, Text) {
  return Editor
}

function ChangeColor(Editor, object) {
  return Editor
}

function transferText(Editor, Text) {
  return Editor
}

function insertPrimitive(Editor, Text) {
  return Editor
}

function changeSize(Editor, object) {
  return Editor
}

function changePosition(Editor, object) {
  return Editor
}

function fillingPrimitive(Editor, object) {
  return Editor
}

function insertArtObject(Editor, ArtObject) {
  return Editor
}

function ApplyFilter(Editor, Filters) {
  return Editor
}