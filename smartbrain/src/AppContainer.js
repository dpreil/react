import React from 'react';
import App from './App';
import Particles from 'react-particles-js';
 import particleOptions from './particles';

const AppContainer = () => {
	return(
		<div className='App'>
			 <Particles className='particles' params={particleOptions}/>
			 <App/>
		</div>
		)
}
export default AppContainer;