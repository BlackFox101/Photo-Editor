import React from 'react';
import ToolBar from "./components/Toolbar/ToolBar";
import './App.css';
import {Editor} from "./types";
import Canvas from "./components/Canvas/Canvas";
import PopupNewCanvas from "./components/Popup/PopupNewCanvas";
import PopupExport from "./components/Popup/PopupExport"

const App = () => {

  return (
    <div className={'container'}>
      <ToolBar />
      <div className={'work_place'}>
        <Canvas editor={props.editor} />
      </div>
      <PopupNewCanvas editor={props.editor}/>
      <PopupExport />
    </div>
  );
}

export default App;
