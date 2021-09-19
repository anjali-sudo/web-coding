/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(10),
    },
  },
}));

export default function Links() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography className={classes.root}>
      <Link href="#" onClick={preventDefault}>
        Customer service 
      </Link>
      <Link href="#" onClick={preventDefault}>
        Need help 
      </Link>
      <Link href="#" onClick={preventDefault}>
        About us 
      </Link>
      <Link href="#" onClick={preventDefault}>
        FAQ
      </Link>
      <Link href="#" onClick={preventDefault}>
        Terms and conditions
      </Link>
      <Link href="#" onClick={preventDefault}>
        Privacy policy
      </Link>
      <Link href="#" onClick={preventDefault}>
        E-waste policy 
      </Link>
      <Link href="#" onClick={preventDefault}>
        Contact us
      </Link>
          </Typography>
  );
}