import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Login from './Login';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Loginscreen from './Loginscreen';

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
                        <Typography align="center" variant="h6"  >
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
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