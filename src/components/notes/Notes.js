import React, { Component } from 'react';

import { Header } from '../layout';
import Toolbar from './Toolbar';

class Notes extends Component {
  render() {
    return (
      <React.Fragment>
        <Header pageTitle="NOTE APP" />
        <Toolbar />
        <div>
          Notes
        </div>
      </React.Fragment>
    );
  }
}

export default Notes;
