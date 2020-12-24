import React from "react";
import {connect} from "react-redux";
import {storeModel} from "../../store/initialState";
import {Tools} from "./Tools";

const SelectedTools = () => {
  //const inputFile = useRef<HTMLInputElement | null>(null);
  const createNewCanvas = () => {
    const popupSelectSize = document.getElementById('popupSelectSize');
    if (popupSelectSize) {
      popupSelectSize.classList.remove('hidden')
    }
  }
  const exportCanvas = () => {
    const popupExport = document.getElementById('popupExport');
    if (popupExport) {
      popupExport.classList.remove('hidden')
    }
  }

  switch (Tool) {
    case Tools.Options:
      return (
        <div className={'options'}>
          <button onClick={createNewCanvas}>Создать</button>
          {/*Добавить картинку на холст*/}
          <button>Добавить</button>
          <button onClick={exportCanvas}>Экспорт</button>
          {/*<input name={'Add Image'} ref={inputFile} type={'file'} onChange={(e) => openImage(e)}/>*/}
        </div>
      );
    case 'Text':
      return (
        <div>{props.activeTool}</div>
      );
    case 'Rectangle':
    case 'Circle':
    case 'Triangle':
      return (
        <div>{props.activeTool}</div>
      );
    case 'Cut':
      return (
        <div>{props.activeTool}</div>
      );
    case 'Marker':
      return (
        <div>{props.activeTool}</div>
      )
    case 'Arts':
      return (
        <div>{props.activeTool}</div>
      );
    default:
      return (
        <div>Нет</div>
      );
  }
}

const mapStateToProps = (state: storeModel) => (
  {
    Tool: state.currentTool
  }
);


export default connect(mapStateToProps)(SelectedTools);