import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
 
// import TiltBox from './tiltbox';
// //import Tilt from 'react-vanilla-tilt';
// import InputField from './inputField';
// import ImageBox from './imagebox';
import ImageReader from './imageReader';
import SignIn from './signin';
import Register from './register';



class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      register:false,
      email:'',
      password:'',
      passwordCheck:'',
      loggedin:true,
      }
    }

    getEmail = (e) => {
      this.setState({email:e.target.value})
    }

    getPassword = (e) => {
      this.setState({password:e.target.value})
    }

    getPasswordCheck = (e) => {
      this.setState({passwordCheck:e.target.value})
    }

    submitDetails = (e) => {
      alert("click!!")
    }

    register = (e) => {
      e.preventDefault();
      this.setState({register:true});
    }

    submitRegistration = (e) => {
      e.preventDefault();
      alert("Registered!")
    }

    logout = (e) => {
      e.preventDefault();
      this.setState({loggedin:false});
    }

  render(){
    if(this.state.loggedin === false){
      if(this.state.register === false){
        return(
          <div className = "App">
            <div className='signInBox'>
              <SignIn className='signIn'
              email = {this.state.email}
              password = {this.state.password}
              submitEmail = {this.getEmail}
              submitPassword = {this.getPassword}
              click = {this.submitDetails}
              register = {this.register} />
            </div>
          </div>)
      } else {
        return (<div className = "App">
                  <div className='signInBox'>
                    <Register className='signIn'
                      email = {this.state.email}
                      password = {this.state.password}
                      passwordCheck = {this.state.passwordCheck}
                      submitEmail = {this.getEmail}
                      submitPassword = {this.getPassword}
                      submitPasswordCheck = {this.getPasswordCheck}
                      click = {this.submitRegistration}
                       />
                </div>
              </div>)}
      } else { 
      return (
        <div className='CoreApp'>
          <ImageReader className = 'CoreApp' logout={this.logout}/>
        </div>
    );}
  }
}

export default App;
