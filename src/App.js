import React, { Fragment } from 'react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import AppHeader from './components/AppHeader';

const styles = theme => ({
  main : {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = () => (
  <Fragment>
    <CssBaseline />

    <AppHeader />

  </Fragment>
);

export default withStyles(styles)(App);
