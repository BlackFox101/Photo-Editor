import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import './PopupNewCanvas.css';
import {EditorInterface, Size} from "../../types";
import {dispatch} from "../../stateManager";
import {addClearCanvas} from "../../functions/Canvas";

const PopupNewCanvas = (props: EditorInterface) => {
  const [currentSize, setSize] = useState<Size>({
    width: props.editor.canvas.width,
    height: props.editor.canvas.height
  });

  const closePopupSettings = () => {
    const popupSelectSize = document.getElementById('popupSelectSize') as HTMLDivElement;
    if (popupSelectSize) {
      popupSelectSize.classList.add('hidden');
    }
  }

  const createNewCanvas = () => {
    dispatch(addClearCanvas, currentSize);
    closePopupSettings();
  }

  return (
    <div id={'popupSelectSize'} className={'divPopupSettings hidden'} onClick={(e) => {
      if (!e.defaultPrevented) {
        closePopupSettings()
      }
    }}>
      <div className={'popupSettings'} onClick={(e) => {
        e.preventDefault();
      }}>
        <span>Введите размер холста</span>
        <div className={'size-padding'}>
          <TextField label="Ширина"
                     onChange={(e) => {
                       setSize({
                         width: Number(e.target.value),
                         height: currentSize.height
                       })
                     }}
                     id="standard-size-small"
                     type={'number'}
                     defaultValue={currentSize.width}/>
        </div>
        <TextField label="Высота" id="standard-size-normal"
                   onChange={(e) => {
                     setSize({
                       width: currentSize.width,
                       height: Number(e.target.value)
                     })
                   }}
                   type={'number'} defaultValue={currentSize.height}/>
        <button onClick={createNewCanvas}>Создать</button>
      </div>
    </div>
  )
}

export default PopupNewCanvas;