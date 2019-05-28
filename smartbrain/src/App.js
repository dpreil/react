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
      name:'',
      register:false,
      email:'',
      password:'',
      passwordCheck:'',
      loggedin:false,
      userID:0,
      entries:0
      }
    }

    getName = (e) => {
      this.setState({name:e.target.value})
    }

    getEmail = (e) => {
      this.setState({email:e.target.value});
    }

    getPassword = (e) => {
      this.setState({password:e.target.value})
    }

    getPasswordCheck = (e) => {
      this.setState({passwordCheck:e.target.value})
    }

    register = (e) => {
      e.preventDefault();
      this.setState({
        register:true,
        password:'',
        email:''});
    }

    submitRegistration = (e) => {
      e.preventDefault();
      if (this.state.password === this.state.passwordCheck){
        //register user
        fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            email: this.state.email,
            password:this.state.password,
            name:this.state.name
          })
        }).then(res=>res.json())
        .then(res => {
          console.log(res);
            if(res){
              this.setState({
                  loggedin:true,
                  password:'',
                  passwordCheck:'',
                  userID:res.id,
                })}
            })
        .then(()=>console.log(this.state))
        .catch(err => console.log(err));
    }}

    logout = (e) => {
      e.preventDefault();
      this.setState({
        name:'',
        register:false,
        email:'',
        password:'',
        passwordCheck:'',
        loggedin:false,
        userID:0,
        entries:0
        });
    }

    submitLogin = (e) => {
      e.preventDefault();
      fetch('http://localhost:3001/signin', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            email: this.state.email,
            password:this.state.password
          })
        }).then(res=>res.json())
      .then(res => {
        if(res.match==='match')
          {
            this.setState({
              loggedin:true,
              name:res.name, 
              entries:res.entries,
              })
            console.log(res);
      }})
      .then(() => console.log(this.state.loggedin))
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
              click = {this.submitLogin}
              register = {this.register} />
            </div>
          </div>)
      } else {
        return (<div className = "App">
                  <div className='signInBox'>
                    <Register className='signIn'
                      name = {this.state.name}
                      email = {this.state.email}
                      password = {this.state.password}
                      passwordCheck = {this.state.passwordCheck}
                      submitName = {this.getName}
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
          <ImageReader className = 'CoreApp' name={this.state.name} email={this.state.email} entries = {this.state.entries} logout={this.logout}/>
        </div>
    );}
  }
}

export default App;
