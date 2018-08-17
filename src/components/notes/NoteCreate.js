import React, { Component } from 'react';
import injectSheet from 'react-jss';

import NoteCreateForm from './NoteCreateForm';

class NoteCreate extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.noteCreate}>
        <NoteCreateForm />
      </div>
    );
  }
}

const styles = {
  noteItem: {},
};

export default injectSheet(styles)(NoteCreate);
