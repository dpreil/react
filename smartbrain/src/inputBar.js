import React from 'react';

const InputBar = ({getIMG, submitImage}) => {
	return (
	
			
				<input
						className='pa1 ba inputBar'
						type='search'
						placeholder='Please enter an image url'
						onChange={getIMG}
						/>
		
			
		)
}

export default InputBar;