import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import particleOptions from './particles';
import TiltBox from './tiltbox';
//import Tilt from 'react-vanilla-tilt';
import InputField from './inputField';
import ImageBox from './imagebox';


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      imgURL: '',
    }

  }

  getImg = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({imgURL:event.target.value});
  }

  submitImage = (e) => {
    e.preventDefault();
    //submit image for rendering and processing
    // I know enough to render in new div. need to fix use Input Field 
  }

  render(){

    return (
      <div className="App">
        <Particles className='particles' params={particleOptions}/>
        <TiltBox/>
 
        <InputField getIMG={this.getImg} submitImage={this.submitImage}/>
        <ImageBox ImgUrl = {this.state.imgURL}/>
        
      </div>
    );
  }
}

export default App;
