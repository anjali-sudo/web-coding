import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function TextFieldSizes() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
     
      
      <div>
        <TextField
          label="flat/house no."
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
      
      </div>

      <div>
        <TextField
          label="Floor no."
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
      
      </div>

      <div>
        <TextField
          label="Tower no."
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
      
      </div>
      <div>
        <TextField
          label="lane no."
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
      
      </div>
      <div>
        <TextField
          label="land mark"
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
      
      </div>
      <div>
        <TextField
          label="Area"
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
      
      </div>
      <div>
        <TextField
          label="Address"
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
      
      </div>
    </form>
  );
}
