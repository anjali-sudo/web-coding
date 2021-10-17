import React from 'react';
import { makeStyles,createTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link, Router} from "react-router-dom";
import Beauty2 from '../../Assets/Beauty2.png'
import Grocery from '../../Assets/Grocery.png'
import Homekitchen from '../../Assets/Homekitchen.png'
import Fashion from '../../Assets/Fashion.png'
import Jwellery from '../../Assets/Jwellery.png'
import Electronics from '../../Assets/Electronics.png'
import Medicine from '../../Assets/Medicine.png'
import Hidden from '@material-ui/core/Hidden';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

//These buttons are used for icon buttons of the categories in the home page//
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      textAlign: 'center',
      
    },
   
  },
  Button: { 
    backgroundcolor:'yellow',
    textAlign: 'center',
  }
 
}));
const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 5,
  },
});


export default function ContainedButtons() {
  const classes = useStyles();
  Button: 
  return (
    
    <div className={classes.root}>

    <Grid container spacing={0}>
            <Grid item sm={2} xs={2}>
    <Button variant="circular" color="secondary" className={classes.Button}>
    <Grid container spacing={-2}>
   
            <Grid item xl={12} xs={12}>
    <img src = {Grocery} className= "image" alt= "Logo" width="65" height="47"/> 
 </Grid>
 
 <Grid item xl={12} xs={12}>
 <Typography variant="caption" display="block" gutterBottom className={classes.typography}>
        Grocery
        </Typography>
        </Grid>
        </Grid>
        
      </Button>
      </Grid>
    
     
      <Grid item sm={1} xs={2}>
      <Button variant="circular" color="secondary" className={classes.Button}>
      <Grid container spacing={-2}>
            <Grid item xl={12} xs={12}>
      <img src = {Homekitchen} className= "image" alt= "Logo" width="65" height="47"/> 
      </Grid>
      <Grid item xl={12} xs={12}>
      <Typography variant="caption" display="block" gutterBottom className={classes.typography}>
        Home & Kitchen
        </Typography>
        </Grid>
        </Grid>
      </Button>
      </Grid>

      <Grid item sm={2} xs={2}>
      <Button variant="circular" color="secondary"  className={classes.Button}>
      <Grid container spacing={-2}>
            <Grid item xl={12} xs={12}>
      <img src = {Fashion} className= "image" alt= "Logo" width="65" height="47"/> 
      </Grid>
            <Grid item xl={12} xs={12}>
            <Typography variant="caption" display="block" gutterBottom className={classes.typography}>
        Fashion
        </Typography>
        </Grid>
        </Grid>
      </Button>
      </Grid>

      <Grid item sm={1} xs={2}>
      <Button variant="circular"  color="secondary" className={classes.Button}>
      <Grid container spacing={-2}>
            <Grid item xl={12} xs={12}>
      <img src = {Jwellery} className= "image" alt= "Logo" width="65" height="47"/> 
      </Grid>
            <Grid item xl={12} xs={12}>
            <Typography variant="caption" display="block" gutterBottom className={classes.typography}>
        Jwellery
        </Typography>
        </Grid>
        </Grid>
      </Button>
      </Grid>

      <Grid item sm={2} xs={2}>
        <Button variant="circular"  color="secondary" textAlign="center" className={classes.Button}className={classes.typography}>
        <Grid container spacing={-2}>
            <Grid item xl={12} xs={12}>
        <img src = {Beauty2} className= "image" alt= "Logo" width="65" height="47"
 /> 
 </Grid>
 <Grid item xl={12} xs={12} textAlign="center" >
 <Typography variant="caption" display="block" gutterBottom className={classes.typography}>
        Beauty
        </Typography>
        </Grid>
        </Grid>
      </Button>
      </Grid>

      <Grid item sm={1} xs={2}>
      <Button variant="circular" color="primary" href="#contained-buttons" className={classes.Button}>
      <Grid container spacing={-2}>
      <Hidden only="xs">
            <Grid item xl={12} xs={12}>
        <img src = {Electronics} className= "image" alt= "Logo" width="65" height="47"
 /> 
 </Grid>
 <Grid item xl={12} xs={12} textAlign="center" >
 <Typography variant="caption" display="block" gutterBottom className={classes.typography}>
        Electronics
        </Typography>
        </Grid>
        </Hidden>
        </Grid>
      </Button>
      </Grid>

     
      <Grid item sm={1} xs={2}>
      <Button variant="circular" color="primary" href="#contained-buttons" className={classes.Button}>
      <Grid container spacing={-2}>
      <Hidden only="xs">
            <Grid item xl={12} xs={12}>
        <img src = {Medicine} className= "image" alt= "Logo" width="65" height="47"
 /> 
 </Grid>
 <Grid item xl={12} xs={12} textAlign="center" >
 <Typography variant="caption" display="block" gutterBottom className={classes.typography}>
        Medicine
        </Typography>
        </Grid>
        </Hidden>
        </Grid>
      </Button>
      </Grid>
</Grid>
    </div>
    
  );
}