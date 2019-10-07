import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
// import '../SandboxPage';

const SandboxPage = (props) => {
  return (
    <div>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <div className="flex-h align-flex-end">
        <h1>Add beats Bro!!!</h1>
        </div>
        </div>
  );
};

export default SandboxPage;