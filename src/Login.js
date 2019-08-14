import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Downloadscreen from './Downloadscreen';
import './index.css';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  function ContainedButtons(props) {
    const classes = useStyles();
  
    return (
       <div>
        <Button variant="contained" color="primary" className={classes.button} styles={style} onClick={() => props.func.handleClickLanding()}>
            Landingpage
        </Button>
        <Button variant="contained" color="primary" className={classes.button} styles={style} onClick={() => props.self.handleClick()}>
            Submit
        </Button>
        <Button variant="contained" color="primary" className={classes.button} styles={style} onClick={() => props.func.handleClickRegister()}>
            Register
        </Button>
      </div>
    );
  }

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen2:this.props.registrationSuccess,
            isDialogOpen:false,
            // toFill: [],
            username: '',
            role: '',
            password: ''
        }
    }

    handleClick() {
        var apiBaseUrl = "http://localhost:4000/api/";
        var self = this;
        var payload = {
            "email": this.state.username,
            "role": this.state.role,
            "password": this.state.password
        }
        console.log(this.state.role);
        // axios.post(apiBaseUrl + 'login', payload)
        //     .then(function (response) {
        //         console.log(response);
        //         if (response.data.code == 200) {
        //             console.log("Login successfull");
        //             var downloadScreen = [];
        // downloadScreen.push(<DownloadScreen appContext={self.props.appContext} />)
        // self.props.appContext.setState({ loginPage: [], downloadScreen: downloadScreen })
        //         }
        //         else if (response.data.code == 204) {
        //             console.log("Username password do not match");
        //             alert("username password do not match")
        //         }
        //         else {
        //             console.log("Username does not exists");
        //             alert("Username does not exist");
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        // TESTING
        if( this.state.username == '' || this.state.role == '' || this.state.password == '' ) {
            this.setState({isDialogOpen:true});
        }
        else {
            console.log("Login successfull");
            var downloadScreen = [];
            downloadScreen.push(<Downloadscreen appContext={this.props.appContext} key={1} />)
            this.props.appContext.setState({ loginPage: [], downloadScreen: downloadScreen })
        } 
    }

    handleClose() {
        this.setState({isDialogOpen:false});
    }

    handleClose2() {
        this.setState({isDialogOpen2:false});
    }

    render() {
        // const classes = useStyles();
        console.log(this.props.appContext);
        return (
            // <div>
            //     <MuiThemeProvider>
            <div>
                <Dialog
                    open={this.state.isDialogOpen2}
                    onClose={()=>this.handleClose2()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Registration Successful!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            You can now LogIn with your credentials.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick = {()=>this.handleClose2()}>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.isDialogOpen}
                    onClose={()=>this.handleClose()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"All Fields are Required!"}</DialogTitle>
                    <DialogActions>
                        <Button color="primary" onClick = {()=>this.handleClose()}>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            // className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* className={classes.title} */}
                        <Typography  variant="h6"  >
                            Login
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField
                    id="standard-with-placeholder"
                    label="Username"
                    placeholder="Enter your Username"
                    // className={classes.textField}
                    margin="normal"
                    onChange={(event) => this.setState({ username: event.target.value })}
                />
                <br/>
                <TextField
                    id="standard-with-placeholder"
                    label="Role"
                    placeholder="Enter your Role"
                    // className={classes.textField}
                    margin="normal"
                    onChange={(event) => { console.log(event.target.value); this.setState({ role: event.target.value }) }}
                />
                <br />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    // className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={(event) => this.setState({ password: event.target.value })}
                />
                <br />
                {/* //className={classes.button} */}
                <br />
                <ContainedButtons func={this.props.parentContext} self={this}/>
            </div>
            //     </MuiThemeProvider>
            // </div>
        );
    }
}
const style = {
    margin: 15,
    align:"center",
};
export default Login;