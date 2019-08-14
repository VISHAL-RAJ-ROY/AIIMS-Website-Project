import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
 export default function ContainedButtons(props) {
    const classes = useStyles();
  
    return (
       <div>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => props.func.handleClickLanding()}>
            Landingpage
        </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => props.self.handleClick()}>
            Submit
        </Button>
        {/* <Button variant="contained" color="primary" className={classes.button} onClick={() => props.func.handleClickLogin()}>
            Login
        </Button> */}
        <Button variant="contained" color="primary" className={classes.button} onClick={() => props.refreshRegister()}>
            Clear
        </Button>
      </div>
    );
  };