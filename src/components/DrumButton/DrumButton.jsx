import React, { Component } from 'react';
import './DrumButton.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';


class DrumButton extends Component {

  // Create the player and set the source
  audio = new Audio(this.props.drum.sound);

  togglePlay = () => {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  render() {
    return (
      <div className='drum-button'>
        <h1>{this.props.drum.name}</h1> 

        <KeyboardEventHandler 
        handleKeys={['a', 'b', 'c']} 
        onKeyEvent={this.togglePlay} />
        
        <button onClick={this.togglePlay} > 
        {this.props.drum.key} 
        </button>

      </div>
    );
  }
}

export default DrumButton;