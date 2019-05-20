import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    opacity: 1,
    position: 'relative',
    transition: 'opacity 0.5s'
  }
});

const AppWrapper = props => {
  const { classes, children } = props;

  return <div className={classes.appWrapper}>{children}</div>;
};

export default withStyles(styles)(AppWrapper);
