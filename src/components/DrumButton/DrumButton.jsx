import React from 'react';
import './DrumButton.css';


function DrumButton(props) {
    return <div className='drum-button'>
      <h1>{props.drum.name}</h1> 
      <h2>{props.drum.key}</h2>
      <h2>{props.drum.sound}</h2>
    </div>
  }


export default DrumButton;