import React from 'react';
import Tilt from 'react-vanilla-tilt';

	// <Tilt className='brainCard'>
	// 		<div className = 'subCard'>
	// 			<img src={require('./brain.svg')} alt='brain' className="brain"/>
	// 		</div>
	// 	</Tilt>
	// 	)

const TiltBox = () => {
	return (
		<Tilt className="Tilt brainCard" options={{ max : 1, perspective:1, scale:3, reverse:true }} style={{ height: 125, width:125 }} >
 			<img src={require('./brain.svg')} alt='brain' className="brain"/> 
		</Tilt>
	
)}

export default TiltBox;

