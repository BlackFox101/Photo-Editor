import React, {useEffect, useRef, useState} from 'react';
import './Canvas.css';
import {Editor} from "../../types";

interface CanvasProps {
  editor: Editor
}

const Canvas = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  let imageData: ImageData = props.editor.canvas;
  let width = imageData.width;
  let height = imageData.height;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.putImageData(imageData, 0, 0);
        ctxRef.current = ctx;
      }
    }
  })

  return (
    <div className={'canvasPlace'}>
      <canvas id={'canvas'} ref={canvasRef}/>
    </div>
  );
}

export default Canvas;