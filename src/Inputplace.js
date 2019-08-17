import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import ContainedButtons from './ContainedButtons';
import Simpleselect from './Simpleselect';
import Termscheckbox from './Termscheckbox';

  class Inputplace extends Component {
    constructor(props) {
        super(props);
        this.state = {
          first_name: '',
      }
      this.simpleSelect = React.createRef();
    }
    refreshRegister() {
        this.setState({
            email: '',
            name : '',
            affiliation : '',
            position : '',
            address : '',
            country : '',
            purpose : ''
        });
    }
    render() {
      return (
          <div>
              <TextField
                  id="standard-with-placeholder"
                  label="Name"
                  placeholder="Enter Name"
                  // className={classes.textField}
                  margin="normal"
                  multiline
                  value = {this.state.name}
                  onChange={(event) => { this.setState({name : event.target.value }); this.props.parent.setState({ name: event.target.value }); } }
              />
              <br/>
              <TextField
                  id="standard-with-placeholder"
                  label="Email"
                  placeholder="Enter your Email"
                  // className={classes.textField}
                  margin="normal"
                  multiline
                  value = {this.state.email}
                  onChange={(event) => { this.setState({email:event.target.value});this.props.parent.setState({ email: event.target.value })} }
              />
              <br />
              <TextField
                  id="standard-with-placeholder"
                  label="Institute"
                  placeholder="Enter your Institute"
                  // className={classes.textField}
                  margin="normal"
                  multiline
                  value = {this.state.affiliation}
                  onChange={(event) => { this.setState({affiliation:event.target.value});this.props.parent.setState({ affiliation: event.target.value })} }
              />
              <br />
              <br/>
                <Simpleselect labelText={"Position"} handlePosition = {(value)=>{ this.setState({position:value});this.props.parent.setState({ position: value })}}/>
              <TextField
                  id="standard-with-placeholder"
                  label="Address"
                  placeholder="Enter your Address"
                  multiline
                  multiline
                  // className={classes.textField}
                  margin="normal"
                  value = {this.state.address}
                  onChange={(event) => { this.setState({address:event.target.value});this.props.parent.setState({ address: event.target.value })} }
              />
              <br />
              <TextField
                  id="standard-with-placeholder"
                  label="Country"
                  placeholder="Enter your Country"
                  // className={classes.textField}
                  margin="normal"
                  multiline
                  value = {this.state.country}
                  onChange={(event) => { this.setState({country:event.target.value});this.props.parent.setState({ country: event.target.value })} }
              />
              <br />
              <TextField
                  id="standard-with-placeholder"
                  label="Mission"
                  multiline
                  placeholder="We would love to know why are you here?"
                  // className={classes.textField}
                  margin="normal"
                  multiline
                  value = {this.state.purpose}
                  onChange={(event) => { this.setState({purpose:event.target.value});this.props.parent.setState({ purpose: event.target.value })} }
              />
              <br />
              <br/>
              <Termscheckbox text="I take oath to to treat the ill to the best of one's ability, to preserve a patient's privacy." handleChangeCheckbox = {()=>this.props.parent.handleChangeCheckbox()}/>
              <br/>
              <br/>
              <ContainedButtons func={this.props.parent.props.parentContext} self={this.props.parent} refreshRegister = {()=>this.refreshRegister()}/>
          </div>
      );
  }
}

export default Inputplace;