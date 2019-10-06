import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import userService from '../../utils/userService';
// import tokenService from '../../utils/tokenService';


class App extends Component {
  constructor() {
    super();
    this.state = {
    // Initialize user if there's a token, otherwise null
    user: userService.getUser()
  }; 
}

handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
}

handleSignupOrLogin = () => {
  this.setState({user: userService.getUser()});
}

  render() {
    return(
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }

}



export default App;
