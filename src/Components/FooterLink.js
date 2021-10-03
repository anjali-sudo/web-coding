/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//These links are used in the footer//
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > * + *': {
      marginLeft: theme.spacing(5),
    },
  },
}));

export default function Links() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    
    <div className={classes.root}>
    <Grid container spacing={1}>
         
    
    <Typography className={classes.root}>
    <Grid item xs={3} sm={3} md={3}>
      <Link color='secondary' href="#" onClick={preventDefault}>
        Customer service
      </Link>
      </Grid>
      <Grid item xs={3} sm={3} md={3}>
      <Link href="#" onClick={preventDefault}>
        Need Help
      </Link>
      </Grid>
      <Grid item xs={3} sm={3} md={3}>
      <Link href="#" onClick={preventDefault}>
        About us
      </Link>
      </Grid>
      <Grid item xs={4} sm={4} md={3}>
      <Link href="#" onClick={preventDefault}>
        FAQ
      </Link>
      </Grid>
      <Grid item xs={4} sm={4}  md={3}>
      <Link href="#" onClick={preventDefault}>
        Terms and conditions
      </Link>
      </Grid>
      <Grid item xs={4} sm={4} md={3}>
      <Link href="#" onClick={preventDefault}>
        Privacy policy
      </Link>
      </Grid>
      <Grid item xs={4} sm={4} md={3}>
      <Link href="#" onClick={preventDefault}>
        E-Waste policy
      </Link>
      </Grid>
      <Grid item xs={4} sm={4} md={3}>
      <Link href="#" onClick={preventDefault}>
        Contact us
      </Link>
      </Grid>
      
    </Typography>
    </Grid>
    </div>
    
   
   
  );
}