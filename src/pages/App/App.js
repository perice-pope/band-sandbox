import React, { Component } from 'react';
import logo from '/Users/pericepope/Desktop/band-sandbox/src/logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import SandboxPage from '../SandboxPage/SandboxPage'; 
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
      <header className="App-header">BAND &nbsp;&nbsp;&nbsp;  SANDBOX</header>
        <BrowserRouter>
        <Switch>
        <Route exact path='/' render={() =>
        <SandboxPage />
        } />
        <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin} /> } />

        </Switch>
        </BrowserRouter>
    </div>
    );
  }
}



export default App;
