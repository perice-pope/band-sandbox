import React, { Component } from 'react';
import './DrumButton.css';


// function handleClick(props) {
//   console.log('Boom Clap!');
//   console.log({props});  
// }

class DrumButton extends Component {
  state = {
    play: false,
    audio: ""
  }

  clickhandler = (e) => {
    console.log('click')
    this.setState({
      play: !this.state.play,
      audio: e.currentTarget.value
    },
    ()=>{
      console.log('playing')
      return (
      <audio id="myAudio">
        <source src="http://streaming.tdiradio.com:8000/house.mp3"></source>
      </audio>
      ); 
    })
  }

  // audio = new Audio(this.props.drum.sound)

  togglePlay = (e) => {
    this.setState({ play: !this.state.play, audio: e.currentTarget.value }, () => {
      this.state.play ? this.state.audio.play() : this.state.audio.pause();
    });
  }
  
  render() {
    console.log(this.props.drum.name)
    console.log(this.state.play, "<<<<<<")
    console.log(this.state.audio, "<state audio<<")
    return (
    <div className='drum-button'>
      <h1>{this.props.drum.name}</h1> 
      <button onClick={ this.clickhandler } value={this.props.drum.sound}>{this.props.drum.key}</button>
      <source src={this.props.drum.sound}></source>
    </div>
    );
  }
}

export default DrumButton;