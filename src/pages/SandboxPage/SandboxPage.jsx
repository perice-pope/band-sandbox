import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import DrumButton from '../../components/DrumButton/DrumButton';

const SandboxPage = (props) => {
  return (
    <div>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <div className="flex-h align-flex-end">
        <h1>Band Sandbox</h1>
        {/* BUTTON COMPONENTS  */}
        <DrumButton />
        <DrumButton />
        <DrumButton />
        <DrumButton />
        <DrumButton />
        <DrumButton />
        <DrumButton />
        <DrumButton />
        <DrumButton />
        <DrumButton />
        <DrumButton />
        <DrumButton />

        </div>
        </div>
  );
};

export default SandboxPage;