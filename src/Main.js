import React, { Component } from 'react';
import './Main.css';
import LoginScreen from './Loginscreen';
import axios from 'axios';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      downloadScreen:[],
      customers:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen logOut={false} appContext={this} key={1}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  // componentDidMount() {
  //   fetch('http://localhost:5000/api/customers') 
  //     .then( res => { console.log(res); return res.json()} )
  //       .then(customers => this.setState({customers:customers}, ()=>console.log('Customers fetched..',customers)));
  // }
  render() {
    console.log('here',this.state.customers[0], typeof this.state.customers);
    return (
      <div className="Main">
        {/* <ul>
          {this.state.customers.map(
            customer => 
            <li key = {customer.id}>{customer.name}</li>
          )}
        </ul> */}
        {this.state.loginPage}
        {this.state.downloadScreen}
      </div>
    );
  }
}

export default Main;