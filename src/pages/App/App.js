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
         name: 'Bongo',
         key: 'Q',
         sound: 'audio/ap_bongo_high1.wav',

        },
        
        {
          name: 'Conga',
          key: 'W',
          sound: 'audio/ap_conga_highflam.wav',
        },
        
        {
          name: 'Cowbell',
          key: 'E',
          sound: 'audio/ap_ghana_bell_low1.wav',
        },
        
        {
          name: 'Mambo Bell',
          key: 'A',
          sound: 'audio/ap_mambo_bell1.wav'
        },
        
        {
          name: 'Maracas' ,
          key: 'S',
          sound: 'audio/ap_maracas_swirl.wav'
        },
        
        {
          name: 'Crash',
          key: 'D',
          sound: 'audio/Crashes_OneShots_Crash_09.wav'
        },
        
        {
          name: "Kick",
          key: 'Z',
          sound: 'audio/JAY_DEE_vol_01_kit_03_kick.wav'
        },
        
        {
          name: 'Hi-Hat',
          key: 'X',
          sound: 'audio/JAY_DEE_vol_01_kit_06_hihat.wav'
        },
        
        {
          name: 'Snare',
          key: 'C',
          sound: 'audio/JAY_DEE_vol_01_kit_09_snare.wav'
        }, 
      
        {
          name: 'Snare 808',
          key: 'R',
          sound: 'audio/Snare_808clap.wav'
        },
      
        {
          name: 'Crash 2',
          key: 'F',
          sound: 'audio/Rev_Crash_01_PL.wav'
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
