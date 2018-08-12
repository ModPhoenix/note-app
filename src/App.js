import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import SingUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/auth/sing-up" component={SingUp} />
            <Route exact path="/auth/sing-in" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
