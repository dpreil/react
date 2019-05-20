import React from 'react';
import InputBar from './inputBar';

const InputField = ({getIMG, submitImage}) => {
	return (
		<div className='inputfield'>
			<form>
				<InputBar getIMG={getIMG}/>
				<input type='submit' value='Bombs away!' onClick={submitImage}/>
			</form>
		</div>
		)
}

export default InputField;