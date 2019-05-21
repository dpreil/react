import React from 'react';

const SignIn = ({email, password, submitEmail, submitPassword, click, register}) => {
	
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
				className='f4 ba w-80 mb4'
				type='password'
				value = {password}
				placeholder='password'
				onChange = {submitPassword}
				/>
			<input className = 'f4 mb3' type='submit' value='submit' onClick={click}/>
			<input className = 'f6 b--none-ns bg-inherit dark-blue underline pointer:hover mb2' type='submit' value='Register Here' onClick={register}/>
		</form>
	)
}

export default SignIn;