import React from 'react';

const Register = ({email, password, passwordCheck, submitEmail, submitPassword, submitPasswordCheck, click}) => {
	
	return(
		<form className='signInForm f1 shadow-3'>
		<span className="mt3 mb4">Sign In</span>
			<input
				className='f4 ba w-80 mb2'
				type='text'
				value= {email}
				placeholder='email'
				onChange = {submitEmail}
				/>
			<input
				className='f4 ba w-80 mb2'
				type='password'
				value = {password}
				placeholder='password'
				onChange = {submitPassword}
				/>
			<input
				className='f4 ba w-80 mb3'
				type='password'
				value = {passwordCheck}
				placeholder='please retype your password'
				onChange = {submitPasswordCheck}
				/>
			<input className = 'f4 mb3' type='submit' value='Register' onClick={click}/>
		</form>
	)
}

export default Register;