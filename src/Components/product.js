import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 18,
    height: 25,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={10} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                
                <Typography variant="body2" gutterBottom>
                  Apples
                </Typography>
                 </Grid>
                 <Button variant="round">
                     <AddCircleRoundedIcon/></Button>
                     <Button variant="round">
                     <RemoveRoundedIcon/></Button>

              <Grid item>
                <Typography variant="body1" style={{ cursor: 'pointer' }}>
                  Add to cart
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
