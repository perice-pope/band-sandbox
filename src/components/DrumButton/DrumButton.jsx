import React, { Component } from 'react';
import './DrumButton.css';


class DrumButton extends Component {

  // Create the player and set the source
  audio = new Audio(this.props.drum.sound);

  togglePlay = () => {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  keyPressed(event) {
    if (event.key === "KeyB") {
      this.audio.paused ? this.audio.play() : this.audio.pause();
    }
  }
    
  
  render() {
    return (
      <div className='drum-button'>
        <h1>{this.props.drum.name}</h1> 
        <button 
        onClick={this.togglePlay} 
        onKeyPress={this.KeyPressed}
        > {this.props.drum.key} </button>
      </div>
    );
  }
}

export default DrumButton;