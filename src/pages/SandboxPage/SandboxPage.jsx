import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import DrumButton from '../../components/DrumButton/DrumButton';
import Metronome from '../../Metronome';

const SandboxPage = (props) => {
  return (
    <div>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout} />
        
        <h1>Band Sandbox</h1>
        <Metronome />
        <div className="container-beats">
        {props.drumsets.map((d,i)=> {
          return <DrumButton key={i} drum={d}/>
        }
        )}
        </div>
        </div>
  );
};

export default SandboxPage;