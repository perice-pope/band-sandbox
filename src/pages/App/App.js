import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import SandboxPage from '../SandboxPage/SandboxPage'; 


class App extends Component {
  constructor() {
    super();
    this.state = {
      drumState: [
        {
         name: 'boom-pop',
         key: 'Q',
         sound: 'http://streaming.tdiradio.com:8000/house.mp3',

        },
        
        {
          name: 'Kick-2',
          key: 'W',
          sound: 'audio/ap_bongo_high1.wav',
        },
        
        {
          name: 'Snare-1',
          key: 'E',
          sound: 'audio/ap_bongo_high1.wav',
        },
        
        {
          name: 'Snare-2',
          key: 'A',
          sound: 'audio/ap_bongo_high1.wav'
        },
        
        {
          name: 'Clap' ,
          key: 'S',
          sound: 'audio/ap_bongo_high1.wav'
        },
        
        {
          name: 'Open-HH',
          key: 'D',
          sound: 'audio/ap_bongo_high1.wav'
        },
        
        {
          name: "Kick-Hat",
          key: 'Z',
          sound: 'audio/ap_bongo_high1.wav'
        },
        
        {
          name: 'Kick',
          key: 'X',
          sound: 'audio/ap_bongo_high1.wav'
        },
        
        {
          name: 'Closed-HH',
          key: 'C',
          sound: 'audio/ap_bongo_high1.wav'
        }, 
      
        {
          name: 'Closed-HH',
          key: 'R',
          sound: 'audio/ap_bongo_high1.wav'
        },
      
        {
          name: 'Closed-HH',
          key: 'F',
          sound: 'audio/ap_bongo_high1.wav'
        },
      
        {
          name: 'Closed-HH',
          key: 'V',
          sound: 'audio/ap_bongo_high1.wav'
        }
      ],
    // Initialize user if there's a token, otherwise 'null'
    user: userService.getUser()
  }
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
        <SandboxPage drumsets={this.state.drumState} />
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
