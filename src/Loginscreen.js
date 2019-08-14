import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import Landingpage from './Landingpage';
import Dialoguebox from './Dialoguebox';

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
                <Dialoguebox isOpen = {this.state.isDialogOpenLogOut} title = "Successfully Logged Out!" handleClose = {()=>this.handleCloseLogOut()} />
                {this.state.loginscreen}
            </div>
        );
    }
}

export default Loginscreen;