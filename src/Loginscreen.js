import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Login from './Login';
import Register from './Register';
import Landingpage from './Landingpage';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

class Loginscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpenLogOut: this.props.logOut,
            username: '',
            role: '',
            password: '',
            loginscreen: [],
        }
    }
    handleCloseLogOut() {
        this.setState({ isDialogOpenLogOut: false });
    }

    handleClickLogin() {
        var loginscreen = [];
        loginscreen.push(<Login parentContext={this} appContext={this.props.appContext} key={1} />);
        this.setState({
            loginscreen: loginscreen,
        })
    }

    handleClickRegister() {
        var loginscreen = [];
        console.log('in handle Click register');
            loginscreen.push(<Register parentContext={this} appContext={this.props.appContext} key={1} />);
            this.setState({
                loginscreen: loginscreen,
            })
    }

    handleClickLanding() {
        var loginscreen = [];
        loginscreen.push(<Landingpage parentContext={this} key={1} />);
        this.setState({
            loginscreen: loginscreen,
        })
    }

    componentWillMount() {
        var loginscreen = [];
        loginscreen.push(<Landingpage parentContext={this} key={1} />);
        this.setState({
            loginscreen: loginscreen,
        })
    }
    render() {
        console.log(this.props.appContext);
        return (
            <div className="loginscreen">
                <Dialog
                    open={this.state.isDialogOpenLogOut}
                    onClose={() => this.handleCloseLogOut()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Successfully Logged Out!"}</DialogTitle>
                    <DialogActions>
                        <Button color="primary" onClick={() => this.handleCloseLogOut()}>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
                {this.state.loginscreen}
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Loginscreen;