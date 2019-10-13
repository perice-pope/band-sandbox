import React, { Component } from 'react';
import './DrumButton.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import socketModule from '../../socket-module/socket-module';

class DrumButton extends Component {


  constructor(props) {
    super(props);

    socketModule.attachListenerForMusic((data) => {
      if(data.data === this.props.drum.sound) {
        console.log("Playing  it");
        this.togglePlay(true);
      }
    });
  }

  // Create the player and set the source
  audio = new Audio(this.props.drum.sound);

  togglePlay = (fromEvent) => {
    if(this.audio.paused) {
      this.audio.play();
      if(fromEvent) {
        // dont do anything
      } else  {
        socketModule.fireMusic(this.props.drum.sound);
      } 
    } else {
      this.audio.pause()
    }
  }

  render() {
    return (
      <div className='drum-button'>
        <h1>{this.props.drum.name}</h1> 

        <KeyboardEventHandler 
        handleKeys={['a', 'b', 'c']} 
        onKeyEvent={this.togglePlay} />
        
        <button onClick={() => this.togglePlay()} > 
        {this.props.drum.key} 
        </button>

      </div>
    );
  }
}

export default DrumButton;