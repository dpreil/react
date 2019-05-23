import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
// import Particles from 'react-particles-js';
// import particleOptions from './particles';
import TiltBox from './tiltbox';
//import Tilt from 'react-vanilla-tilt';
import InputField from './inputField';
import ImageBox from './imagebox';
import Logout from './logout';
import Clarifai from 'clarifai';



class ImageReader extends Component {
  constructor (props){
    super(props);
    this.state = {
      imgURL: '',
      box:''
    }
    this.app = new Clarifai.App({apiKey:'37ee56e7f2144e0d873763d314893fa5'});
  }
  


  getImg = (event) => {
    event.preventDefault();
    this.setState({imgURL:event.target.value, box:''});
    console.log(this.state.box);
  }

  submitImage = (e) => {
    e.preventDefault();
    this.app.models.predict("a403429f2ddf4b49b307e318f00e528b",this.state.imgURL)
    .then((response) => {
      const path = response.outputs[0].data.regions[0].region_info.bounding_box;
     // console.log(path);
      this.setState({box:path});

    }, (err) => {

    })

    //submit image for rendering and processing
    // I know enough to render in new div. need to fix use Input Field 
  }

  render(){

    return (
      <div className="CoreApp">
        <TiltBox/>
 
        <InputField getIMG={this.getImg} submitImage={this.submitImage}/>
        <ImageBox ImgUrl = {this.state.imgURL} box={this.state.box}/>
        <Logout logout={this.props.logout}/>
      </div>
    );
  }
}

export default ImageReader;
