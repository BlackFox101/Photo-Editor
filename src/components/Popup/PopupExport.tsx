import React from 'react';
import './PopupExport.css';
import {exportCanvas} from '../../functions/Canvas';

const PopupExport = () => {
  const closePopupExport = () => {
    const popupExport = document.getElementById('popupExport') as HTMLDivElement;
    if (popupExport) {
      popupExport.classList.add('hidden');
    }
  }

  return (
    <div id={'popupExport'} className={'divPopupExport hidden'} onClick={(e) => {
      if (!e.defaultPrevented) {
        closePopupExport()
      }
    }}>
      <div className={'popupSettings'} onClick={(e) => {
        e.preventDefault();
      }}>
        <span>Выберите формат файла</span>
        <div className={'choice'}>
          <div className={'buttonLeft'}>
            <button onClick={() => exportCanvas('png')}>PNG</button>
          </div>
          <button onClick={() => exportCanvas('jpeg')}>JPG</button>
        </div>
      </div>
    </div>
  )
}

export default PopupExport;