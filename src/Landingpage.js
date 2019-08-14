import React, {Component} from 'react'; 
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  function ContainedButtons(props) {
    const classes = useStyles();
  
    return (
       <div>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => props.func.handleClickLogin()}>
            Login
        </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => props.func.handleClickRegister()}>
            Register
        </Button>
      </div>
    );
  }

class Landingpage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Welcome to Database!!</h1>
                <ContainedButtons func={this.props.parentContext}/>
            </div>
        );  
    }
}

export default Landingpage;