import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Loginscreen from './Loginscreen';
import Navbar from './Navbar';

class Downloadscreen extends Component {

    handleClick(event) {
        console.log("Logging Out");
        var loginPage = [];
        loginPage.push(<Loginscreen logOut={true} appContext = {this.props.appContext} key={1}/>);
        this.props.appContext.setState({ loginPage: loginPage, downloadScreen: []});
    }

    render() {
        return (
            <div>
                <Navbar title={"Dashboard"} />
                <br/><br/><br/><br/><br/>
                <h1>Welcome to the #1 Medical Dataset!!</h1>
                <br/><br/><br/>
                <Button variant="contained" color="primary" onClick={(event) => this.handleClick(event)}>
                    Log Out
                </Button>
            </div>
        );
    }
}

export default Downloadscreen;