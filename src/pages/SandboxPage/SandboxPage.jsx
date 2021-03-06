import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import DrumButton from '../../components/DrumButton/DrumButton';
import Metronome from '../../Metronome';
import '../SandboxPage/SandboxPage.css'; 
// import KeyboardEventHandler from 'react-keyboard-event-handler';


const SandboxPage = (props) => {

  return (
    <div>
     
      <NavBar 
        user={props.user}
        handleLogout={props.handleLogout} />
        <h1>Band Sandbox</h1>
        <Metronome />

        {/* <KeyboardEventHandler 
        handleKeys={['a', 'b', 'c']} 
        onKeyEvent={this.togglePlay} /> */}
        
        <div className="container-beats">
        {props.drumsets.map((d,i) => {
          return <DrumButton key={i} drum={d} />
        }
        )}
        </div>
        </div>
  );
};

export default SandboxPage;