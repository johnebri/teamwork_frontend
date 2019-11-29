import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from '../pages/Login';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }

}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
       
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Teamwork is an ​internal social network for employees of an organization. The goal of this application is to facilitate more interaction between colleagues and promote team bonding
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Get Started
                  </Button>

                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
 
      </main>
   
    </React.Fragment>
  );
}
