type Editor = {
  Canvas: Canvas,
  Filters: Filters,
  CurrentState: CurrentState
}

enum Filters {
  Red = '#ff0000',
  Green = '#00ff00',
  Blue = '#0000ff',
  Black = '#000000'
}

type StateList = {
  Undo: Undo,
  Redo: Redo
}

type Undo = {
  stack: []
}
type Redo = {
  stack: []
}

type Canvas = {
  SelectedObject: Images | TextBox | ArtObject | Primitive,
  Height: number,
  Width: number,
  Area: Area
}

type Primitive = Circle | Rectangle | Triangle;

type Images = {
  Url: string,
  Coordinates: CoordinatesBox
  Size: Size
}

type TextBox = {
  Color: string,
  Coordinates: CoordinatesBox,
  Size: Size,
  Text: string
}

type ArtObject = {
  Url: string,
  Coordinates: CoordinatesBox,
  Size: Size
}

type Circle = {
  Color: string,
  Size: Size,
  Coordinates: CoordinatesBox
}

type Rectangle = {
  Color: string,
  Size: Size,
  Coordinates: CoordinatesBox
}

type Triangle = {
  Color: string,
  Size: Size,
  Coordinates: CoordinatesBox
}

type Color = string

type Area = {
  Coordinates: CoordinatesBox,
  Size: Size,
  Filter: Filter
}

type Filter = {
  colorFilter: string
}

type CurrentState = {
  Color: string,
  Font: string,
  FontSize: number,
  PrimitiveSize: number,
  PrimitivePosition: PrimitivePosition
}

type PrimitivePosition = {
  x: number,
  y: number
}

function importImages(Canvas: Canvas, img: Images) {
  return Canvas
}

function exportImages(Canvas: Canvas) {
  return Canvas
}

function selectedArea(Editor: Editor, Area: Area) {
  Editor.Canvas.Area = Area;

  return Editor
}

function moveArea(Editor: Editor, Coordinates: CoordinatesBox) {
  Editor.Canvas.Area.Coordinates = Coordinates;
  Editor.Canvas.Area.Coordinates = Coordinates;

  return Editor
}

function circumcisionArea(Editor: Editor, Area: Area) {
  Editor.Canvas.Area.Size = Area.Size
  return Editor
}

function deleteObject(Editor: Editor, Area: Area) {
  Editor.Canvas.Area
  return Editor
}

type Size = {
  Length: number,
  Width: number
}

type CoordinatesBox = {
  x: number,
  y: number
}

function insertText(Editor: Editor, Text: TextBox) {
  Editor.Canvas.SelectedObject = Text;

  return Editor
}

function changeTextColor(Editor: Editor, Text: TextBox, Color: Color) {
  Text.Color = Color;
  Editor.Canvas.SelectedObject = Text;

  return Text
}

function changeTextSize(Editor: Editor, Text: TextBox, Size: Size) {
  Text.Size = Size;
  Editor.Canvas.SelectedObject = Text;

  return Editor
}

function transferText(Editor: Editor, Text: TextBox, Coordinates: CoordinatesBox) {
  Text.Coordinates = Coordinates;
  Editor.Canvas.SelectedObject = Text;

  return Editor
}

function insertPrimitive(Editor: Editor, Primitive: Primitive) {
  Editor.Canvas.SelectedObject = Primitive;

  return Editor
}

function changePrimitiveSize(Editor: Editor, Primitive: Primitive, Size: Size) {
  Primitive.Size = Size;

  return Editor
}

function changePrimitivePosition(Editor: Editor, Primitive: Primitive, Coordinates: CoordinatesBox) {
  Primitive.Coordinates = Coordinates;
  Editor.Canvas.SelectedObject = Primitive;

  return Editor
}

function fillingPrimitive(Editor: Editor, Primitive: Primitive, Color: Color) {
  Primitive.Color = Color;
  Editor.Canvas.SelectedObject = Primitive;

  return Editor
}

function insertArtObject(Editor: Editor, ArtObject: ArtObject) {
  Editor.Canvas.SelectedObject = ArtObject;

  return Editor
}

function applyFilter(Editor: Editor, Filter: Filter) {
  Editor.Canvas.Area.Filter = Filter;

  return Editor
}