import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Login from './Login';
import Inputplace from './Inputplace';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            email: '',
            name : '',
            affiliation : '',
            position : '',
            address : '',
            country : '',
            purpose : '',
            formEntry : []
        }
    }

    componentWillMount() {
        var formEntry = [];
        formEntry.push(<Inputplace parent={this} key={1}/>);
        this.setState({formEntry:formEntry});
    }

    handleClick() {
        var apiBaseUrl = "http://localhost:4000/api/";
        console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.role);
        //To be done:check for empty values before hitting submit
        var self = this;
        var payload = {
            "name": this.state.name,
            "position": this.state.position,
            "affiliation": this.state.affiliation,
            "purpose": this.state.purpose,
            "country": this.state.country,
            "email": this.state.email,
            "address": this.state.address,
        }
        //     axios.post(apiBaseUrl+'/register', payload)
        //     .then(function (response) {
        //         console.log(response);
        //         if(response.data.code == 200){
        //         //  console.log("registration successfull");
        //         var loginscreen=[];
        //         loginscreen.push(<Login parentContext={this}/>);
        //         var loginmessage = "Not Registered yet.Go to registration";
        //         self.props.parentContext.setState({loginscreen:loginscreen,
        //         loginmessage:loginmessage,
        //         buttonLabel:"Register",
        //         isLogin:true
        //             });
        //         }
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
        // TESTING
        if (this.state.position == '' || this.state.email == '' || this.state.purpose == '' || this.state.name == '' || this.state.affiliation == '' || this.state.country == '' || this.state.address == '') {
            this.setState({ isDialogOpen: true });
        }
        else {
            var loginscreen = [];
            loginscreen.push(<Login registrationSuccess={true} parentContext={this.props.parentContext} appContext={this.props.appContext} key={1} />);
            var loginmessage = "Not Registered yet, Go to registration.";
            this.props.parentContext.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Register",
                isLogin: true
            });
        }
    }

    handleClose() {
        this.setState({ isDialogOpen: false });
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.state.isDialogOpen}
                    onClose={() => this.handleClose()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"All Fields are Required!"}</DialogTitle>
                    <DialogActions>
                        <Button color="primary" onClick={() => this.handleClose()}>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap align="center">
                            Register
                        </Typography>
                    </Toolbar>
                </AppBar>
                    {this.state.formEntry}
            </div>
        );
    }
}

export default Register;