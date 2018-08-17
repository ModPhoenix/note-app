import React, { Component } from 'react';
import injectSheet from 'react-jss';

class NoteItem extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.noteItem}>
        <div className={classes.title}>Title</div>
        <div className={classes.description}>Description</div>
      </div>
    );
  }
}

const styles = {
  noteItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 64px)',
  },
  title: {},
  description: {},
};

export default injectSheet(styles)(NoteItem);
