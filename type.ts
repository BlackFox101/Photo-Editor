type Editor = {
  canvas: Canvas,
  selectedObject: SelectedObject,
  stateList: StateList
}

type SelectedObject = Image | TextBox | ArtObject | Primitive

type StateList = {
  undo: Undo,
  redo: Redo
}

type Undo = {
  stack: Canvas[]
}
type Redo = {
  stack: Canvas[]
}

type Canvas = {
  filter: Filter,
  height: number,
  width: number,
  dedicatedArea: Area,
  artObjects: ArtObject[],
  primitives: Primitive[],
  images: Image[],
  texts: TextBox[],
}

type Primitive = Circle | Rectangle | Triangle;

type Color = {
  r: number,
  g: number,
  b: number,
  a: number
}

type ObjectBox = {
  coordinates: CoordinatesBox,
  size: Size,
  color: Color,
}

type Image  = {
  url: Url,
  coordinates: CoordinatesBox,
  size: Size
}
type ArtObject = {
  url: Url,
  coordinates: CoordinatesBox,
  size: Size
}
type Circle = ObjectBox
type Rectangle = ObjectBox
type Triangle = ObjectBox
type Area = ObjectBox
type TextBox = ObjectBox

type Url = string
type Filter = string

type CoordinatesBox = {
  x: number,
  y: number
}

type Size = {
  width: number,
  height: number
}

export {
  Editor,
  SelectedObject,
  StateList,
  Undo,
  Redo,
  Canvas,
  Primitive,
  Image,
  ArtObject,
  Circle,
  Rectangle,
  Triangle,
  Area,
  TextBox,
  CoordinatesBox,
  Size,
  Color,
  Filter
}