import React, {useState} from "react";
import SelectedTools from "./SelectedTools";
import "./ToolBar.css";
import {ColorResult, ChromePicker} from 'react-color';
import {Tools} from './Tools'

interface ButtonProps {
  id: string,
  title: string,
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button id={props.id} title={props.title} onClick={props.onClick}>
    </button>
  )
}

const ToolBar = () => {
  const [activeTool, setTool] = useState(Tools.Options);

  return (
    <div className={'tool_bar'}>
      <div className={'top_tool_bar'}>
        <Button id={'tool_options'} title={'Options'} onClick={() => setTool(Tools.Options)}/>
        <button id="tool_undo" title={'Undo'} data-hotkey="ctrl+z"/>
        <button id="tool_redo" title={'Redo'} data-hotkey="ctrl+y"/>
        <button id={'tool_delete'} title={'Delete'} data-hotkey="delete"/>
      </div>
      <div className={'center_tools'}>
        <div className={'tools'}>
          <Button id={'tool_text'} title={'Text'} onClick={() => setTool(Tools.Text)}/>
          <Button id={'tool_rectangle'} title={'Rectangle'} onClick={() => setTool(Tools.Rectangle)}/>
          <Button id={'tool_circle'} title={'Circle'} onClick={() => setTool(Tools.Circle)}/>
          <Button id={'tool_triangle'} title={'Triangle'} onClick={() => setTool(Tools.Triangle)}/>
          <Button id={'tool_cut'} title={'Cut'} onClick={() => setTool(Tools.Cut)}/>
          <Button id={'tool_arts'} title={'Arts'} onClick={() => setTool(Tools.Arts)}/>
        </div>
        <div className={'temp_tools'}>
          <SelectedTools/>
        </div>
      </div>
    </div>
  );
}

export default ToolBar;