import React from 'react'
import './Popup.css'

function Popup(props) {
  return (props.trigger ?  ( 
    <div className='popup'>
      <div className='popup-inner'>
        <div className='popup-header'>
          <h2>{props.title}</h2>
          <button className='close-btn' onClick={() => props.setTrigger(false)}>
            X
          </button>
        </div>
        <div className='popup-content'>
          {props.children}   
        </div>
      </div>
    </div>
    ) : null 
  );
}

export default Popup;
