type Editor = {
  canvas: ImageData,
  selectedObject: SelectedObject,
}

type SelectedObject = TextBox | ArtObject | Primitive | Area | ImageData | null

type StateList = {
  undo: ImageData[],
  redo: ImageData[],
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
  color: Color
}

type ArtObject = {
  url: Url,
  coordinates: CoordinatesBox,
  size: Size
}
type Circle = ObjectBox
type Rectangle = ObjectBox
type Triangle = ObjectBox
type TextBox = ObjectBox
type Area = {
  coordinates: CoordinatesBox,
  size: Size
}

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

export interface image {
  image: HTMLImageElement | null;
}

export interface EditorInterface {
  editor: Editor
}

export type {
  Editor,
  SelectedObject,
  StateList,
  Primitive,
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