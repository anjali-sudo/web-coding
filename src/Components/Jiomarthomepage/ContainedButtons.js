import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link, Router} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Button variant="contained" color="secondary">
        Grocery
      </Button>

      <Button variant="contained" color="secondary">
        Home and kitchen
      </Button>
      <Button variant="contained" color="secondary">
        Fashion 
      </Button>
      <Button variant="contained" color="secondary">
        Jewellery
      </Button>
      <Button variant="contained" color="secondary">
        Beauty
      </Button>
      
      <Button variant="contained" color="primary" href="#contained-buttons">
        Electronic
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Medicine
      </Button>
    </div>
    
  );
}
