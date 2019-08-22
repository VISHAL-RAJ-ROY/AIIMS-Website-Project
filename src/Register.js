import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login';
import Inputplace from './Inputplace';
import Navbar from './Navbar';
import Dialoguebox from './Dialoguebox';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            isDialogOpen2 : false,
            email: '',
            name : '',
            affiliation : '',
            position : '',
            address : '',
            country : '',
            purpose : '',
            isChecked : false,
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
        var self = this;
        console.log(self);
        var payload = {
            "name": this.state.name,
            "position": this.state.position,
            "affiliation": this.state.affiliation,
            "purpose": this.state.purpose,
            "country": this.state.country,
            "email": this.state.email,
            "address": this.state.address,
        }
        if (this.state.position == '' || this.state.email == '' || this.state.purpose == '' || this.state.name == '' || this.state.affiliation == '' || this.state.country == '' || this.state.address == '') {
            this.setState({ isDialogOpen: true });
        }
        else if( !this.state.isChecked ) {
            this.setState({isDialogOpen2 : true});
        }
        else {
            // axios.post('http://localhost:5000/api/sendmail', payload)
            // .then(function(response) {
            //     console.log('andar hai',response);
            //     if(response.status == 200){
            // test comment
                    var loginscreen = [];
                    loginscreen.push(<Login registrationSuccess={true} parentContext={self.props.parentContext} appContext={self.props.appContext} key={1} />);
                    var loginmessage = "Not Registered yet, Go to registration.";
                    self.props.parentContext.setState({
                        loginscreen: loginscreen,
                        loginmessage: loginmessage,
                        buttonLabel: "Register",
                        isLogin: true
                    });
            //     }
            // })
            // .catch(function (error) {
            //         console.log(error);
            //     });
        }
    }

    handleClose() {
        this.setState({ isDialogOpen: false });
    }

    handleClose2() {
        this.setState({ isDialogOpen2: false });
    }

    handleChangeCheckbox() {
        this.setState({isChecked : !this.state.isChecked});
    }

    render() {
        return (
            <div>
                <Dialoguebox isOpen={this.state.isDialogOpen} handleClose = {()=>this.handleClose()}  />
                <Dialoguebox isOpen={this.state.isDialogOpen2} handleClose = {()=>this.handleClose2()} content = "Please accept the terms and conditions :)" />
                <Navbar title={"Register"} />
                {this.state.formEntry}
            </div>
        );
    }
}

export default Register;