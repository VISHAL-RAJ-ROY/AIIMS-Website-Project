import React, { Component } from 'react';
import './Main.css';
import LoginScreen from './Loginscreen';
class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      downloadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen logOut={false} appContext={this} key={1}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="Main">
        {this.state.loginPage}
        {this.state.downloadScreen}
      </div>
    );
  }
}

export default Main;