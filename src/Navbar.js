import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 2,
    },
  }));
  
  export default function Navbar(props) {
    const classes = useStyles();
  
    return (
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
    );
  }
