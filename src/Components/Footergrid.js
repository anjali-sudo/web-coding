import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
        <Link color='Inherit' href="#" onClick={preventDefault}>
        Customer service
      </Link>
        </Grid>
        <Grid item xs={4}>
          <Link color='Inherit' href="#" onClick={preventDefault}>
        Need Help
      </Link>
        </Grid>
        <Grid item xs={4}>
        <Link  color='Inherit' href="#" onClick={preventDefault}>
        About us
      </Link>
        </Grid>
        <Grid item xs={4}>
        <Link  color='Inherit' href="#" onClick={preventDefault}>
        FAQ
      </Link>
        </Grid>
        <Grid item xs={4}>
        <Link color='Inherit' href="#" onClick={preventDefault}>
        Terms and conditions
      </Link>
        </Grid>
        <Grid item xs={4}>
        <Link color='Inherit'  href="#" onClick={preventDefault}>
        Privacy policy
      </Link>
        </Grid>
        <Grid item xs={4}>
        <Link color='Inherit' href="#" onClick={preventDefault}>
        E-Waste policy
      </Link>
        </Grid>
        <Grid item xs={4}>
        <Link color='Inherit' href="#" onClick={preventDefault}>
        Contact us
      </Link>
        </Grid>
         
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
       
      </Grid>
    </div>
  );
}